const { PgitFacPlaceShare, sequelize } = require('../models');
const { QueryTypes, Op, fn, col, where } = require('sequelize');


exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacPlaceShare.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


// 🔹 1. Get next sequence value
async function getNextPolSysId() {
  const result = await sequelize.query(
    `SELECT PGI_FPS_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL`,
    { type: QueryTypes.SELECT }
  );

  return result[0].NEXTVAL;
}

// 🔹 2. Main create function
exports.create = async (data) => {
  const transaction = await sequelize.transaction();

  try {
    // ✅ Step 1: Generate Primary Key
    const fpsSysId = await getNextPolSysId();
    data.FPS_SYS_ID = fpsSysId;

    // Use a placeholder until the number generation procedure completes
    data.FPS_PLACE_NO = 'NUMBER';

    // ✅ Step 2: Insert into PGIT_FAC_PLACE_SHARE
    await PgitFacPlaceShare.create(data, { transaction });

    // ✅ Step 3: Fetch FO data (required for procedure)
    const foData = await sequelize.query(
      `
      SELECT FO_COMP_CODE, FO_DEPT_CODE, FO_DIVN_CODE
      FROM PGIT_FAC_OUT
      WHERE FO_SYS_ID = :foSysId
      `,
      {
        replacements: { foSysId: data.FPS_FO_SYS_ID },
        type: QueryTypes.SELECT,
        transaction
      }
    );

    if (!foData.length) {
      throw new Error('FO data not found for given FPS_FO_SYS_ID');
    }

    const { FO_COMP_CODE, FO_DEPT_CODE, FO_DIVN_CODE } = foData[0];

    // ✅ Step 4: Call Oracle Procedure + Update FPS_PLACE_NO
    await sequelize.query(
      `
    DECLARE
      M_PLACEMENT_NO VARCHAR2(100);
      M_POL_NO_AVL   VARCHAR2(1);
    BEGIN
      PGIPK_DOCUMENT_NUMBER.Pr_Generate_Doc_Number(
        P_DS_TYPE    => '16',      --HARDCODE
        P_DS_CODE    => '0',       --HARDCODE
        P_COMP_CODE  => :compCode,
        P_DEPT_CODE  => :deptCode,
        P_DIVN_CODE  => :divnCode,
        P_SYS_ID     => :fpsSysId, -- FPS_SYS_ID 
        P_DOC_NUMBER => M_PLACEMENT_NO,
        P_DOC_NO_AVL => M_POL_NO_AVL
      );

      DBMS_OUTPUT.put_line('PLACE_NO = '|| M_PLACEMENT_NO);

      UPDATE PGIT_FAC_PLACE_SHARE  
         SET FPS_PLACE_NO = M_PLACEMENT_NO
       WHERE FPS_SYS_ID = :fpsSysId;  --FPS_SYS_ID
    END;
      `,
      {
        replacements: {
          compCode: FO_COMP_CODE,
          deptCode: FO_DEPT_CODE,
          divnCode: FO_DIVN_CODE,
          fpsSysId: fpsSysId
        },
        type: QueryTypes.RAW,
        transaction
      }
    );

    const updatedRecord = await PgitFacPlaceShare.findByPk(fpsSysId, { transaction });

    // ✅ Step 5: Commit Transaction
    await transaction.commit();

    return {
      message: 'Data saved successfully',
      FPS_SYS_ID: fpsSysId,
      FPS_PLACE_NO: updatedRecord?.FPS_PLACE_NO,
      data: updatedRecord
    };

  } catch (error) {
    // ❌ Rollback if anything fails
    await transaction.rollback();
    console.error('Error:', error);
    throw error;
  }
};
exports.update = async (id, updatedData) => {
  const item = await PgitFacPlaceShare.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlaceShare with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacPlaceShare.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlaceShare with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (FPS_FO_SYS_ID) => {
  const items = await PgitFacPlaceShare.findAll({
    where: { FPS_FO_SYS_ID },
    raw: true
  });

  return items;
};
