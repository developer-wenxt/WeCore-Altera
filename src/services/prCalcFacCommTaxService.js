const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function calcFacCommTax(
  foSysId  = null,
  fpsSysId = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    await connection.execute(
      `
      BEGIN
        PGIPK_TAX_CALC.PR_CALC_FAC_COMM_TAX(
          P_FO_SYS_ID  => :pFoSysId,
          P_FPS_SYS_ID => :pFpsSysId,
          P_PLACE_IDX  => 0
        );
        COMMIT;
      END;
      `,
      {
        pFoSysId:  { val: foSysId  === null ? null : Number(foSysId),  type: oracledb.NUMBER },
        pFpsSysId: { val: fpsSysId === null ? null : Number(fpsSysId), type: oracledb.NUMBER },
      }
    );

    return {
      message:  'PGIPK_TAX_CALC.PR_CALC_FAC_COMM_TAX executed successfully',
      foSysId,
      fpsSysId,
    };

  } catch (error) {
    await connection.execute(`ROLLBACK`).catch(() => {});
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = { calcFacCommTax };
