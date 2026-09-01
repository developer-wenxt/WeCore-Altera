const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function endtProvFacPerc(
  polSysId = null,
  endNoIdx = null,
  endSrNo = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const bindVars = {
      pPolSysId: { val: polSysId === null ? null : Number(polSysId), type: oracledb.NUMBER },
      pEndNoIdx: { val: endNoIdx === null ? null : Number(endNoIdx), type: oracledb.NUMBER },
      pEndSrNo: { val: endSrNo === null ? null : Number(endSrNo), type: oracledb.NUMBER }
    };

    await connection.execute(
      `
      BEGIN
        PR_ENDT_PROV_FAC_PERC(
          P_POL_SYS_ID          => :pPolSysId,
          P_END_NO_IDX          => :pEndNoIdx,
          P_END_SR_NO           => :pEndSrNo
        );
      END;
      `,
      bindVars
    );

    return {
      success: true,
      message: 'PR_ENDT_PROV_FAC_PERC executed successfully',
      data: {}
    };
  } catch (error) {
    console.error('Error executing PR_ENDT_PROV_FAC_PERC:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = {
  endtProvFacPerc
};
