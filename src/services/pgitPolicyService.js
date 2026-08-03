const { PgitPolicy, sequelize } = require('../models');
const { QueryTypes, Op, fn, col, where } = require('sequelize');
exports.getAll = async (
  {
    search,
    POL_PROD_CODE,
    POL_APPR_STS,
    POL_SRC_TYPE,
    issueDateFrom,
    issueDateTo,
    POL_CLASS_CODE,
    POL_DS_TYPE
  },
  {
    limit = 10,
    offset = 0,
    order = "POL_SYS_ID",
    orderDirection = "DESC"
  } = {}
) => {

  let conditions = [];
  let replacements = {};

   if (POL_DS_TYPE) {
    conditions.push(`P.POL_DS_TYPE = :POL_DS_TYPE`);
    replacements.POL_DS_TYPE = POL_DS_TYPE;
  }


  if (POL_PROD_CODE) {
    conditions.push(`P.POL_PROD_CODE = :POL_PROD_CODE`);
    replacements.POL_PROD_CODE = POL_PROD_CODE;
  }

  if (POL_CLASS_CODE) {
    conditions.push(`P.POL_CLASS_CODE = :POL_CLASS_CODE`);
    replacements.POL_CLASS_CODE = POL_CLASS_CODE;
  }

  if (POL_APPR_STS) {
    conditions.push(`P.POL_APPR_STS = :POL_APPR_STS`);
    replacements.POL_APPR_STS = POL_APPR_STS;
  }

  if (POL_SRC_TYPE) {
    conditions.push(`P.POL_SRC_TYPE = :POL_SRC_TYPE`);
    replacements.POL_SRC_TYPE = POL_SRC_TYPE;
  }

  if (issueDateFrom && issueDateTo) {
    conditions.push(`P.POL_ISSUE_DT BETWEEN :issueDateFrom AND :issueDateTo`);
    replacements.issueDateFrom = issueDateFrom;
    replacements.issueDateTo = issueDateTo;
  }

  if (search) {
    conditions.push(`(
      UPPER(P.POL_NO) LIKE UPPER(:search) OR
      UPPER(P.POL_PREM_CURR_CODE) LIKE UPPER(:search) OR
      UPPER(P.POL_DFLT_SI_CURR_CODE) LIKE UPPER(:search) OR
      UPPER(P.POL_SRC_TYPE) LIKE UPPER(:search) OR
      UPPER(P.POL_ASSR_CODE) LIKE UPPER(:search) OR
      UPPER(P.POL_CUST_CODE) LIKE UPPER(:search) OR
      UPPER(P.POL_SRC_CODE) LIKE UPPER(:search) OR
      UPPER(C.CUST_NAME) LIKE UPPER(:search) OR
      TO_CHAR(P.POL_ISSUE_DT, 'YYYY-MM-DD') LIKE :search OR
      TO_CHAR(P.POL_FM_DT, 'YYYY-MM-DD') LIKE :search OR
      TO_CHAR(P.POL_TO_DT, 'YYYY-MM-DD') LIKE :search
    )`);

    replacements.search = `%${search.trim()}%`;
  }

  const whereSQL =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  const allowedSortFields = [
    "POL_NO",
    "POL_ISSUE_DT",
    "POL_FM_DT",
    "POL_TO_DT",
    "POL_APPR_STS",
    "POL_SYS_ID"
  ];

  const safeOrder = allowedSortFields.includes(order)
    ? order
    : "POL_SYS_ID";

  const safeDirection =
    orderDirection?.toUpperCase() === "ASC" ? "ASC" : "DESC";

  const orderSQL = `ORDER BY P.${safeOrder} ${safeDirection}`;

  const MAX_LIMIT = 10000;
  const safeLimit = Math.min(Number(limit), MAX_LIMIT);
  const safeOffset = Number(offset);

  replacements.maxRow = safeOffset + safeLimit;
  replacements.offset = safeOffset;

  const sql = `
    SELECT
      POL_NO,
      POL_BUS_TYPE,
      POL_END_NO,
      POL_CUST_CODE,
      CUST_NAME,
      CUSTOMER,
      POL_ISSUE_DT,
      POL_FM_DT,
      POL_TO_DT,
      POL_PREM_CURR_CODE,
      POL_DFLT_SI_CURR_CODE,
      POL_SRC_TYPE,
      POL_ASSR_CODE,
      POL_SRC_CODE,
      POL_SYS_ID,
      POL_END_SR_NO,
      POL_END_NO_IDX,
      POL_APPR_STS
    FROM (
      SELECT inner_query.*, ROWNUM rnum FROM (
        SELECT
          P.POL_NO,
          P.POL_BUS_TYPE,
          P.POL_END_NO,
          P.POL_CUST_CODE,
          C.CUST_NAME,
          P.POL_CUST_CODE || ' - ' || C.CUST_NAME AS CUSTOMER,
          P.POL_ISSUE_DT,
          P.POL_FM_DT,
          P.POL_TO_DT,
          P.POL_PREM_CURR_CODE,
          P.POL_DFLT_SI_CURR_CODE,
          P.POL_SRC_TYPE,
          P.POL_ASSR_CODE,
          P.POL_SRC_CODE,
          P.POL_SYS_ID,
          P.POL_END_SR_NO,
          P.POL_END_NO_IDX,
          P.POL_APPR_STS
        FROM PGIT_POLICY P
        LEFT JOIN PCOM_CUSTOMER C ON C.CUST_CODE = P.POL_CUST_CODE
        ${whereSQL}
        ${orderSQL}
      ) inner_query WHERE ROWNUM <= :maxRow
    ) WHERE rnum > :offset
  `;

  const results = await sequelize.query(sql, {
    replacements,
    type: QueryTypes.SELECT,
  });

  const countSql = `
    SELECT COUNT(*) AS TOTAL
    FROM PGIT_POLICY P
    LEFT JOIN PCOM_CUSTOMER C ON C.CUST_CODE = P.POL_CUST_CODE
    ${whereSQL}
  `;

  const countResult = await sequelize.query(countSql, {
    replacements,
    type: QueryTypes.SELECT,
  });

  const totalRecords = countResult[0]?.TOTAL || 0;
  return {
      pagination: {
      totalRecords,
      limit: safeLimit,
      offset: Number(offset),
    },
    data: results,
  
  };
};


exports.getById = async (keys) => {
  const policy = await PgitPolicy.findOne({
    where: {
      POL_SYS_ID: keys.POL_SYS_ID,
      POL_END_NO_IDX: keys.POL_END_NO_IDX,
      POL_END_SR_NO: keys.POL_END_SR_NO
    }
  });

  if (!policy) {
    const error = new Error(
      `Policy not found with SYS_ID=${keys.POL_SYS_ID}, END_NO_IDX=${keys.POL_END_NO_IDX}, END_SR_NO=${keys.POL_END_SR_NO}`
    );
    error.statusCode = 404;
    throw error;
  }

  const plain = policy.get({ plain: true });

  const formatted = {};
  for (const key in plain) {
    const value = plain[key];
    if (value instanceof Date) {
      formatted[key] = value.toISOString().split('T')[0];
    } else {
      formatted[key] = value;
    }
  }

  return {
    success: true,
    message: 'Policy fetched successfully',
    data: formatted
  };
};




async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_POL_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}


async function generatePolicyNumber(polSysId, transaction) {
  const plsql = `
    DECLARE
      CURSOR C1 IS
        SELECT *
        FROM PGIT_POLICY
        WHERE POL_SYS_ID = :polSysId;

      M_POL        C1%ROWTYPE;
      M_POL_NO     VARCHAR2(100);
      M_POL_NO_AVL VARCHAR2(1);
    BEGIN
      OPEN C1;
      FETCH C1 INTO M_POL;
      CLOSE C1;

      PGIPK_DOCUMENT_NUMBER.Pr_Generate_Doc_Number(
        P_DS_TYPE    => M_POL.POL_DS_TYPE,
        P_DS_CODE    => M_POL.POL_DS_CODE,
        P_COMP_CODE  => M_POL.POL_COMP_CODE,
        P_DEPT_CODE  => M_POL.POL_DEPT_CODE,
        P_DIVN_CODE  => M_POL.POL_DIVN_CODE,
        P_SYS_ID     => M_POL.POL_SYS_ID,
        P_DOC_NUMBER => M_POL_NO,
        P_DOC_NO_AVL => M_POL_NO_AVL
      );

      UPDATE PGIT_POLICY
         SET POL_NO = M_POL_NO
       WHERE POL_SYS_ID = M_POL.POL_SYS_ID;
    END;
  `;

  await sequelize.query(plsql, {
    replacements: { polSysId },
    type: QueryTypes.RAW,
    transaction
  });

  const result = await PgitPolicy.findByPk(polSysId, {
    attributes: ['POL_NO'],
    transaction
  });

  return result?.POL_NO;
}




exports.create = async (data) => {
  const transaction = await sequelize.transaction();

  try {
    const nextId = await getNextPolSysId();
    data.POL_SYS_ID = nextId;


    data.POL_NO = 'NUMBER';

    const createdRecord = await PgitPolicy.create(data, { transaction });

   const currencyPlsql = `
  DECLARE
    CURSOR C1 IS
      SELECT POL_SYS_ID, POL_END_NO_IDX, POL_END_SR_NO, POL_COMP_CODE,
             POL_DS_TYPE, POL_DS_CODE, POL_PROD_CODE, POL_ISSUE_DT,
             POL_FM_DT   
      FROM PGIT_POLICY
      WHERE POL_SYS_ID = :polSysId;
  BEGIN
    FOR I IN C1 LOOP
      Pcopk_Sys_Vars.M_COMP_CODE := I.POL_COMP_CODE;
      PGIPK_POLICY_ENTRY.Pr_Dflt_Currency(
        P_POL_SYS_ID => I.POL_SYS_ID,
        P_END_NO_IDX => I.POL_END_NO_IDX,
        P_END_SR_NO  => I.POL_END_SR_NO,
        P_DS_TYPE    => I.POL_DS_TYPE,
        P_DS_CODE    => I.POL_DS_CODE,
        P_PROD_CODE  => I.POL_PROD_CODE,
        P_POL_ISS_DT => TRUNC(I.POL_ISSUE_DT),
        P_COMP_CODE  => I.POL_COMP_CODE
      );

      PGIPK_POLICY_ENTRY.Pr_Dflt_Charge(
        P_POL_SYS_ID => I.POL_SYS_ID,
        P_END_NO_IDX => I.POL_END_NO_IDX,
        P_END_SR_NO  => I.POL_END_SR_NO,
        P_DS_TYPE    => I.POL_DS_TYPE,
        P_DS_CODE    => I.POL_DS_CODE,
        P_PROD_CODE  => I.POL_PROD_CODE,
        P_PREM_CODE  => NULL,
        P_POL_DT     => I.POL_FM_DT  
      );
    END LOOP;
  END;
`;

    await sequelize.query(currencyPlsql, {
      replacements: { polSysId: createdRecord.POL_SYS_ID },
      type: QueryTypes.RAW,
      transaction
    });

    const generatedPolNo = await generatePolicyNumber(
      createdRecord.POL_SYS_ID,
      transaction
    );

    if (!generatedPolNo || generatedPolNo === 'NUMBER') {
      throw new Error('POL_NO generation failed');
    }

    await transaction.commit();

    return {
      success: true,
      message: 'Policy created successfully',
      data: {
        POL_SYS_ID: createdRecord.POL_SYS_ID,
        POL_NO: generatedPolNo, 
        createdRecord
      }
    };

  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};



exports.update = async (keys, updatedData) => {
  const item = await PgitPolicy.findOne({
    where: {
      POL_SYS_ID: keys.POL_SYS_ID,
      POL_END_NO_IDX: keys.POL_END_NO_IDX,
      POL_END_SR_NO: keys.POL_END_SR_NO
    }
  });

  if (!item) {
    const error = new Error(
      `Policy not found with SYS_ID=${keys.POL_SYS_ID}, END_NO_IDX=${keys.POL_END_NO_IDX}, END_SR_NO=${keys.POL_END_SR_NO}`
    );
    error.statusCode = 404;
    throw error;
  }

  delete updatedData.POL_SYS_ID;
  delete updatedData.POL_END_NO_IDX;
  delete updatedData.POL_END_SR_NO;

  await item.update(updatedData);

  return {
    success: true,
    message: 'Policy updated successfully',
    data: item
  };
};


exports.deleteItem = async (id) => {
  const item = await PgitPolicy.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolicy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getStatus = async (POL_PROD_CODE) => {
  const query = `
    SELECT DISTINCT
      PARA_SUB_CODE,
      PARA_NAME
    FROM PCOM_APP_PARAMETER, PGIT_POLICY
    WHERE PARA_CODE = 'POL_APPR_STS'
      AND POL_APPR_STS = PARA_SUB_CODE
      AND POL_PROD_CODE = :POL_PROD_CODE
  `;

  const records = await sequelize.query(query, {
    replacements: { POL_PROD_CODE },   
    type: QueryTypes.SELECT,
  });

  return records;
};
