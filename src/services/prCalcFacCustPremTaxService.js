const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function calcFacCustPremTax(
  foSysId   = null,
  fpsSysId  = null,
  fcSysId   = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    await connection.execute(
      `
      BEGIN
        PGIPK_TAX_CALC.PR_CALC_FAC_CUST_PREM_TAX(
          P_FO_SYS_ID   => :pFoSysId,
          P_FPS_SYS_ID  => :pFpsSysId,
          P_PLACE_IDX   => 0,
          P_FC_SYS_ID   => :pFcSysId
        );
      END;
      `,
      {
        pFoSysId:  { val: foSysId  === null ? null : Number(foSysId),  type: oracledb.NUMBER },
        pFpsSysId: { val: fpsSysId === null ? null : Number(fpsSysId), type: oracledb.NUMBER },
        pFcSysId:  { val: fcSysId  === null ? null : Number(fcSysId),  type: oracledb.NUMBER },
      }
    );

    await connection.execute(`COMMIT`);

    return {
      message:   'PGIPK_TAX_CALC.PR_CALC_FAC_CUST_PREM_TAX executed successfully',
      foSysId,
      fpsSysId,
      fcSysId,
    };

  } catch (error) {
    await connection.execute(`ROLLBACK`).catch(() => {});
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = { calcFacCustPremTax };
