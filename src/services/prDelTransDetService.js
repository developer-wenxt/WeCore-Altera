const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function delTransDet(riSysId, polSysId, endNoIdx = null, endSrNo = null) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const bindVars = {
      pRiSysId: { val: riSysId === null ? null : Number(riSysId), type: oracledb.NUMBER },
      pPolSysId: { val: polSysId === null ? null : Number(polSysId), type: oracledb.NUMBER },
      pEndNoIdx: { val: endNoIdx === null ? null : Number(endNoIdx), type: oracledb.NUMBER },
      pEndSrNo: { val: endSrNo === null ? null : Number(endSrNo), type: oracledb.NUMBER }
    };

    await connection.execute(
      `
      DECLARE
        M_RI_SYS_ID    NUMBER;
        M_POL_SYS_ID   NUMBER;
        M_END_NO_IDX   NUMBER;
        M_END_SR_NO    NUMBER;
      BEGIN
        M_RI_SYS_ID    := :pRiSysId;
        M_POL_SYS_ID   := :pPolSysId;
        M_END_NO_IDX   := :pEndNoIdx;
        M_END_SR_NO    := :pEndSrNo;

        PGIPK_RI_PROP_TTY_ALLOC.PR_DEL_TRANS_DET(
          P_RI_SYS_ID     => M_RI_SYS_ID,
          P_POL_NO        => M_POL_SYS_ID,
          P_POL_END_IDX   => M_END_NO_IDX,
          P_POL_END_SR_NO => M_END_SR_NO,
          P_ALLOC_IDX     => 0
        );
        
        COMMIT;
      END;
      `,
      bindVars
    );

    return {
      success: true,
      message: 'Transaction details deleted successfully',
      data: null
    };
  } catch (error) {
    console.error('Error executing PR_DEL_TRANS_DET:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = {
  delTransDet
};
