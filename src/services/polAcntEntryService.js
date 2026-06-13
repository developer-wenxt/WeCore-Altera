const { sequelize, QueryTypes } = require('../models');

exports.get = async (polSysId, polEndNoIdx, polEndSrNo) => {
  let query = `
SELECT AD_POL_NO,
       AD_END_NO_IDX,
       AD_END_NO,
       AD_CUST_CODE,
       AD_ASSR_CODE,
       AD_ASSR_NAME,
       AD_TRAN_CODE,
       AD_DOC_DT,
       AD_DOC_NO,
       AD_CURR_CODE,  
       AD_MAIN_ACNT_CODE,
       AD_SUB_ACNT_CODE,
       AD_INT_ENT_YN,
       AD_DUE_DT,
       AD_DRCR_FLAG,      
       AD_AMT_FC,
       AD_AMT_LC_1,
       AD_NARRATION,
       AD_POST_YN,
       AD_CR_UID,
       AD_CR_DT
  FROM PGIT_ACNT_DOC
 WHERE AD_POL_SYS_ID = :polSysId
   AND AD_DOC_TYPE IN ('001', '002')
`;

  const replacements = { polSysId };

  if (polEndNoIdx !== undefined && polEndNoIdx !== null && polEndNoIdx !== '') {
    query += `   AND AD_END_NO_IDX = :polEndNoIdx\n`;
    replacements.polEndNoIdx = polEndNoIdx;
  } else {
    query += `   AND NVL(AD_END_NO_IDX, 0) = 0\n`;
  }

  if (polEndSrNo !== undefined && polEndSrNo !== null && polEndSrNo !== '') {
    query += `   AND AD_END_SR_NO = :polEndSrNo\n`;
    replacements.polEndSrNo = polEndSrNo;
  } else {
    query += `   AND NVL(AD_END_SR_NO, 0) = 0\n`;
  }

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements
  });

  if (!records || records.length === 0) {
    return [];
  }

  const groups = {};
  
  for (const record of records) {
    const key = `${record.AD_POL_NO}_${record.AD_END_NO_IDX}_${record.AD_DOC_NO}`;
    
    if (!groups[key]) {
      groups[key] = {
        AD_POL_NO: record.AD_POL_NO,
        AD_END_NO_IDX: record.AD_END_NO_IDX,
        AD_END_NO: record.AD_END_NO,
        AD_CUST_CODE: record.AD_CUST_CODE,
        AD_ASSR_CODE: record.AD_ASSR_CODE,
        AD_ASSR_NAME: record.AD_ASSR_NAME,
        AD_TRAN_CODE: record.AD_TRAN_CODE,
        AD_DOC_DT: record.AD_DOC_DT,
        AD_DOC_NO: record.AD_DOC_NO,
        AD_CURR_CODE: record.AD_CURR_CODE,
        details: []
      };
    }
    
    groups[key].details.push({
      AD_MAIN_ACNT_CODE: record.AD_MAIN_ACNT_CODE,
      AD_SUB_ACNT_CODE: record.AD_SUB_ACNT_CODE,
      AD_INT_ENT_YN: record.AD_INT_ENT_YN,
      AD_DUE_DT: record.AD_DUE_DT,
      AD_DRCR_FLAG: record.AD_DRCR_FLAG,
      AD_AMT_FC: record.AD_AMT_FC,
      AD_AMT_LC_1: record.AD_AMT_LC_1,
      AD_NARRATION: record.AD_NARRATION,
      AD_POST_YN: record.AD_POST_YN,
      AD_CR_UID: record.AD_CR_UID,
      AD_CR_DT: record.AD_CR_DT
    });
  }

  return Object.values(groups);
};
