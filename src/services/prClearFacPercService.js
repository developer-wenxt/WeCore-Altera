const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function clearFacPerc(
  polSysId = null,
  endNoIdx = null,
  endSrNo = null,
  clearAllRiskYn = null,
  perilClassCode = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const bindVars = {
      pPolSysId: { val: polSysId === null ? null : Number(polSysId), type: oracledb.NUMBER },
      pEndNoIdx: { val: endNoIdx === null ? null : Number(endNoIdx), type: oracledb.NUMBER },
      pEndSrNo: { val: endSrNo === null ? null : Number(endSrNo), type: oracledb.NUMBER },
      pClearAllRiskYn: { val: clearAllRiskYn === null ? null : String(clearAllRiskYn), type: oracledb.STRING },
      pPerilClassCode: {
        val: perilClassCode === null ? null : String(perilClassCode),
        type: oracledb.STRING,
        dir: oracledb.BIND_INOUT,
        maxSize: 200
      }
    };

    const result = await connection.execute(
      `
      BEGIN
        PR_CLEAR_FAC_PERC(
          P_POL_SYS_ID        => :pPolSysId,
          P_END_NO_IDX        => :pEndNoIdx,
          P_END_SR_NO         => :pEndSrNo,
          P_CLEAR_ALL_RISK_YN => :pClearAllRiskYn,
          P_PERIL_CLASS_CODE  => :pPerilClassCode
        );
      END;
      `,
      bindVars
    );

    return {
      success: true,
      message: 'PR_CLEAR_FAC_PERC executed successfully',
      data: {
        perilClassCode: result.outBinds ? result.outBinds.pPerilClassCode : null
      }
    };
  } catch (error) {
    console.error('Error executing PR_CLEAR_FAC_PERC:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = {
  clearFacPerc
};
