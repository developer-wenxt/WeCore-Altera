const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function defaultFacPerc(
  polSysId = null,
  endNoIdx = null,
  endSrNo = null,
  defaultAllRiskYn = null,
  perilClassCode = null,
  defaultFacPercVal = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const bindVars = {
      pPolSysId: { val: polSysId === null ? null : Number(polSysId), type: oracledb.NUMBER },
      pEndNoIdx: { val: endNoIdx === null ? null : Number(endNoIdx), type: oracledb.NUMBER },
      pEndSrNo: { val: endSrNo === null ? null : Number(endSrNo), type: oracledb.NUMBER },
      pDefaultAllRiskYn: { val: defaultAllRiskYn === null ? null : String(defaultAllRiskYn), type: oracledb.STRING },
      pPerilClassCode: {
        val: perilClassCode === null ? null : String(perilClassCode),
        type: oracledb.STRING,
        dir: oracledb.BIND_INOUT,
        maxSize: 200
      },
      pDefaultFacPerc: { val: defaultFacPercVal === null ? null : Number(defaultFacPercVal), type: oracledb.NUMBER }
    };

    const result = await connection.execute(
      `
      BEGIN
        PR_DEFAULT_FAC_PERC(
          P_POL_SYS_ID          => :pPolSysId,
          P_END_NO_IDX          => :pEndNoIdx,
          P_END_SR_NO           => :pEndSrNo,
          P_DEFAULT_ALL_RISK_YN => :pDefaultAllRiskYn,
          P_PERIL_CLASS_CODE    => :pPerilClassCode,
          P_DEFAULT_FAC_PERC    => :pDefaultFacPerc
        );
      END;
      `,
      bindVars
    );

    return {
      success: true,
      message: 'PR_DEFAULT_FAC_PERC executed successfully',
      data: {
        perilClassCode: result.outBinds ? result.outBinds.pPerilClassCode : null
      }
    };
  } catch (error) {
    console.error('Error executing PR_DEFAULT_FAC_PERC:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = {
  defaultFacPerc
};
