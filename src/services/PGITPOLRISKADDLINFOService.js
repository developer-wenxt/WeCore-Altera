const { PgitPolRiskAddlInfo: PGITPOLRISKADDLINFO , sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKADDLINFO.findAll({ where: filters, limit, offset, ...(order && { order }) });
};
async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PRAI_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
  );
  return result[0].NEXTVAL || result[0].nextVal;
}


exports.create = async (data) => {
  const transaction = await sequelize.transaction();

  try {

    // ✅ Validate required fields (uppercase)
    if (!data.PRAI_RISK_ID || !data.PRAI_PSEC_SYS_ID) {
      throw new Error('PRAI_RISK_ID and PRAI_PSEC_SYS_ID are required');
    }

    // 🔴 Duplicate validation (UNIQUE TOGETHER)
    const existing = await PGITPOLRISKADDLINFO.findOne({
      where: {
        PRAI_RISK_ID: data.PRAI_RISK_ID,
        PRAI_PSEC_SYS_ID: data.PRAI_PSEC_SYS_ID,
        PRAI_POL_SYS_ID: data.PRAI_POL_SYS_ID
      },
      transaction
    });

    if (existing) {
      throw new Error(
        `Record already exists for RISK_ID ${data.PRAI_RISK_ID} and PSEC_SYS_ID ${data.PRAI_PSEC_SYS_ID}`
      );
    }

    // 🔹 Generate Sequence ID
    const nextId = await getNextPolSysId();
    data.PRAI_SYS_ID = nextId;

    const createdRecord = await PGITPOLRISKADDLINFO.create(data, {
      transaction
    });

    // 🔹 Update lvl1_sys_id same as sys_id
    await createdRecord.update(
      {
        PRAI_LVL1_SYS_ID: createdRecord.PRAI_SYS_ID,
      },
      { transaction }
    );

    await transaction.commit();

    // 🔹 Response Format
    const responseData = {
      PRAI_SYS_ID: createdRecord.PRAI_SYS_ID,
      PRAI_POL_SYS_ID: createdRecord.PRAI_POL_SYS_ID,
      PRAI_END_NO_IDX: createdRecord.PRAI_END_NO_IDX,
      PRAI_PSEC_SYS_ID: createdRecord.PRAI_PSEC_SYS_ID,
      PRAI_RISK_LVL_NO: createdRecord.PRAI_RISK_LVL_NO,
      PRAI_RISK_SR_NO: createdRecord.PRAI_RISK_SR_NO,
      PRAI_LVL1_SR_NO: createdRecord.PRAI_LVL1_SR_NO,
      PRAI_LVL2_SR_NO: createdRecord.PRAI_LVL2_SR_NO,
      PRAI_LVL1_SYS_ID: createdRecord.PRAI_LVL1_SYS_ID,
      PRAI_RISK_ID: createdRecord.PRAI_RISK_ID,
      createdRecord
    };

    return {
      success: true,
      message: 'Record created successfully',
      data: responseData,
    };

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
exports.update = async (id, updatedData) => {
  const item = await PGITPOLRISKADDLINFO.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKADDLINFO with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKADDLINFO.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKADDLINFO with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRAI_POL_SYS_ID , PRAI_PSEC_SYS_ID) => {
  const items = await PGITPOLRISKADDLINFO.findAll({
    where: { PRAI_POL_SYS_ID , PRAI_PSEC_SYS_ID },raw: true
  });

   const groupedResult = items.reduce((acc, row) => {
    const key = row.PRAI_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 

  // return {
  //   success: true,
  //   message: 'Records fetched successfully',
  //   data: items
  // };
};

