const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function executePrRiPropTtyAlloc(
  pPolSysId = null,
  pEndNoIdx = null,
  pEndSrNo = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const result = await connection.execute(
      `
      DECLARE 
        P_POL_SYS_ID NUMBER;
        P_POL_END_NO_IDX NUMBER;
        P_POL_END_SR_NO NUMBER;
        P_BATCH_ALLOC_YN VARCHAR2(200);
        P_DFLT_ALLOC_YN VARCHAR2(200);
        P_READ_HIST_LIVE VARCHAR2(200);
        P_CQS_BFR_FAC_YN VARCHAR2(200);
        P_RI_CONFIRM_REQ_YN VARCHAR2(200);
        P_FAC_APPR_REQ_YN VARCHAR2(200);
        P_ERR_MSG VARCHAR2(2000);
        P_RA_AVL VARCHAR2(200);
      
      CURSOR C1(P_COMP_CODE  VARCHAR2) IS
        SELECT COMP_BASE_CURR_CODE_1 FROM FM_COMPANY WHERE COMP_CODE = P_COMP_CODE;
      
        M_BASE_CURR_CODE  FM_COMPANY.COMP_BASE_CURR_CODE_1%TYPE;
      
      CURSOR C_POL IS
      SELECT *  
      FROM PGIT_POLICY
      WHERE POL_SYS_ID = :pPolSysId
      AND   POL_END_NO_IDX = :pEndNoIdx
      AND   POL_END_SR_NO  = :pEndSrNo;    
        
      BEGIN 
        
        FOR I IN C_POL LOOP
        
        IF C1%ISOPEN THEN
           CLOSE C1;
        END IF;  
        OPEN  C1(P_COMP_CODE => I.POL_COMP_CODE);
        FETCH C1 INTO M_BASE_CURR_CODE;
        CLOSE C1;
      
      PCOPK_SYS_VARS.M_BASE_CURR1_CODE := M_BASE_CURR_CODE;
      
        P_POL_SYS_ID := I.POL_SYS_ID;
        P_POL_END_NO_IDX := I.POL_END_NO_IDX;
        P_POL_END_SR_NO := I.POL_END_SR_NO;
        P_BATCH_ALLOC_YN := '0';
        P_DFLT_ALLOC_YN := '1';
        P_READ_HIST_LIVE := 'LIVE';
        P_CQS_BFR_FAC_YN := '1';
        P_RI_CONFIRM_REQ_YN := '1';
        P_FAC_APPR_REQ_YN := '0';
        P_ERR_MSG := NULL;
        P_RA_AVL := NULL;
        
      PGIPK_RI_PROP_TTY_ALLOC.PR_RI_PROP_TTY_ALLOC ( P_POL_SYS_ID, P_POL_END_NO_IDX, P_POL_END_SR_NO, P_BATCH_ALLOC_YN, P_DFLT_ALLOC_YN, P_READ_HIST_LIVE, P_CQS_BFR_FAC_YN, P_RI_CONFIRM_REQ_YN, P_FAC_APPR_REQ_YN, P_ERR_MSG, P_RA_AVL );
      
        END LOOP;

        :pErrMsg := P_ERR_MSG;
        :pRaAvl := P_RA_AVL;
      END;
      `,
      {
        pPolSysId: { val: pPolSysId === null ? null : Number(pPolSysId), type: oracledb.NUMBER },
        pEndNoIdx: { val: pEndNoIdx === null ? null : Number(pEndNoIdx), type: oracledb.NUMBER },
        pEndSrNo: { val: pEndSrNo === null ? null : Number(pEndSrNo), type: oracledb.NUMBER },
        pErrMsg: { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 2000 },
        pRaAvl: { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 200 }
      }
    );

    return {
      errMsg: result.outBinds.pErrMsg,
      raAvl: result.outBinds.pRaAvl
    };

  } catch (error) {
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = { executePrRiPropTtyAlloc };
