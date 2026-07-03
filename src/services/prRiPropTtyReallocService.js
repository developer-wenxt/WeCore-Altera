const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function riPropTtyRealloc(riSysId, polSysId, endNoIdx = null, endSrNo = null) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const bindVars = {
      pRiSysId: { val: riSysId === null ? null : Number(riSysId), type: oracledb.NUMBER },
      pPolSysId: { val: polSysId === null ? null : Number(polSysId), type: oracledb.NUMBER },
      pEndNoIdx: { val: endNoIdx === null ? null : Number(endNoIdx), type: oracledb.NUMBER },
      pEndSrNo: { val: endSrNo === null ? null : Number(endSrNo), type: oracledb.NUMBER },
      pErrMsg: { type: oracledb.STRING, dir: oracledb.BIND_OUT, maxSize: 4000 }
    };

    const result = await connection.execute(
      `
      DECLARE
        M_READ_HIST_LIVE  VARCHAR2(10);
        M_ERR_MSG         VARCHAR2(1000);
        M_HIST_FOUND      VARCHAR2(1);

        CURSOR C1(
          P_POL_SYS_ID   NUMBER,
          P_END_NO_IDX   NUMBER,
          P_END_SR_NO    NUMBER
        ) IS
        SELECT 1 
        FROM PGITH_POLICY
        WHERE POLH_SYS_ID = P_POL_SYS_ID
        AND   POLH_END_NO_IDX = P_END_NO_IDX
        AND   POLH_END_SR_NO  = P_END_SR_NO;

      BEGIN
        OPEN  C1(P_POL_SYS_ID => :pPolSysId, 
                 P_END_NO_IDX => :pEndNoIdx, 
                 P_END_SR_NO  => :pEndSrNo);
        FETCH C1 INTO M_HIST_FOUND;
        CLOSE C1;

        IF NVL(M_HIST_FOUND,'0') = '1' THEN
           M_READ_HIST_LIVE := 'HIST';
        ELSE
           M_READ_HIST_LIVE := 'LIVE';
        END IF;

        PGIPK_RI_PROP_TTY_ALLOC.PR_RI_PROP_TTY_REALLOC( 
           P_RI_SYS_ID      => :pRiSysId,
           P_POL_SYS_ID     => :pPolSysId,
           P_POL_END_NO_IDX => :pEndNoIdx,
           P_POL_END_SR_NO  => :pEndSrNo,
           P_BATCH_ALLOC_YN => '0',
           P_READ_HIST_LIVE => M_READ_HIST_LIVE,
           P_END_YN         => 'N',
           P_ERR_MSG        => M_ERR_MSG
        );

        :pErrMsg := M_ERR_MSG;

        COMMIT;
      END;
      `,
      bindVars
    );

    const errMsg = result.outBinds && result.outBinds.pErrMsg ? result.outBinds.pErrMsg : null;

    return {
      success: true,
      message: 'RI Property Treaty Reallocation executed successfully',
      data: {
        errMsg: errMsg
      }
    };
  } catch (error) {
    console.error('Error executing RI Property Treaty Reallocation:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = {
  riPropTtyRealloc
};
