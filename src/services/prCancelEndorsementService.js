const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function cancelEndorsement(polSysId, endNoIdx = null, endSrNo = null) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const bindVars = {
      pPolSysId: { val: polSysId === null ? null : Number(polSysId), type: oracledb.NUMBER },
      pEndNoIdx: { val: endNoIdx === null ? null : Number(endNoIdx), type: oracledb.NUMBER },
      pEndSrNo: { val: endSrNo === null ? null : Number(endSrNo), type: oracledb.NUMBER }
    };

    await connection.execute(
      `
      DECLARE
        M_POL_SYS_ID  NUMBER;
        M_END_NO_IDX  NUMBER;
        M_END_SR_NO   NUMBER;
      BEGIN
        M_POL_SYS_ID := :pPolSysId;
        M_END_NO_IDX := :pEndNoIdx;
        M_END_SR_NO  := :pEndSrNo;

        FOR I IN (SELECT * FROM PGIT_POLICY WHERE POL_SYS_ID = M_POL_SYS_ID) LOOP
          PGIPK_ENDT_CANCEL.PR_CANCEL_ENDORSEMENT( 
            P_POL_SYS_ID   => I.POL_SYS_ID,
            P_POL_END_TYPE => I.POL_END_TYPE,
            P_COMP_CODE    => I.POL_COMP_CODE,
            P_DIVN_CODE    => I.POL_DIVN_CODE,
            P_DEPT_CODE    => I.POL_DEPT_CODE,
            P_DS_TYPE      => I.POL_DS_TYPE,
            P_PROD_CODE    => I.POL_PROD_CODE,
            P_END_NO_IDX   => M_END_NO_IDX,
            P_END_SR_NO    => M_END_SR_NO
          );
          COMMIT;
        END LOOP;                                         
      END;
      `,
      bindVars
    );

    return {
      success: true,
      message: 'Endorsement cancelled successfully',
      data: null
    };
  } catch (error) {
    console.error('Error executing cancel endorsement:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = {
  cancelEndorsement
};
