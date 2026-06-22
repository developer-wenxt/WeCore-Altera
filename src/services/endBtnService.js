const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function createEndt({
  polSysId,
  polEndCode,
  polEndDt,
  polEndEffFmDt,
  polEndEffToDt,
  polAddPremCalcType,
  polRemarks,
  polEndDesc
}) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    const getOracleDate = (val) => {
      if (val === null || val === undefined || val === '') return null;
      const d = new Date(val);
      return isNaN(d.getTime()) ? null : d;
    };

    const bindVars = {
      pPolSysId: { val: polSysId === null || polSysId === undefined ? null : Number(polSysId), type: oracledb.NUMBER },
      pPolEndCode: { val: polEndCode === null || polEndCode === undefined ? null : String(polEndCode), type: oracledb.STRING },
      pPolEndDt: { val: getOracleDate(polEndDt), type: oracledb.DATE },
      pPolEndEffFmDt: { val: getOracleDate(polEndEffFmDt), type: oracledb.DATE },
      pPolEndEffToDt: { val: getOracleDate(polEndEffToDt), type: oracledb.DATE },
      pPolAddPremCalcType: { val: polAddPremCalcType === null || polAddPremCalcType === undefined ? null : String(polAddPremCalcType), type: oracledb.STRING },
      pPolRemarks: { val: polRemarks === null || polRemarks === undefined ? null : String(polRemarks), type: oracledb.STRING },
      pPolEndDesc: { val: polEndDesc === null || polEndDesc === undefined ? null : String(polEndDesc), type: oracledb.STRING },
      pSuccessYn: { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 1 },
      pErrMesg: { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 1000 }
    };

    const result = await connection.execute(
      `
      BEGIN
        PR_CREATE_ENDT(
          P_POL_SYS_ID              => :pPolSysId,
          P_POL_END_CODE            => :pPolEndCode,
          P_POL_END_DT              => :pPolEndDt,
          P_POL_END_EFF_FM_DT       => :pPolEndEffFmDt,
          P_POL_END_EFF_TO_DT       => :pPolEndEffToDt,
          P_POL_ADD_PREM_CALC_TYPE  => :pPolAddPremCalcType,
          P_POL_REMARKS             => :pPolRemarks,
          P_POL_END_DESC            => :pPolEndDesc,
          P_SUCCESS_YN              => :pSuccessYn,
          P_ERR_MESG                => :pErrMesg
        );
      END;
      `,
      bindVars
    );

    const successYn = result.outBinds ? result.outBinds.pSuccessYn : null;
    const errMesg = result.outBinds ? result.outBinds.pErrMesg : null;

    if (successYn === 'Y') {
      await connection.execute(`COMMIT`);
      return {
        success: true,
        message: 'Endorsement created successfully',
        data: {
          successYn,
          errMesg
        }
      };
    } else {
      await connection.execute(`ROLLBACK`).catch(() => {});
      return {
        success: false,
        message: errMesg || 'Failed to create endorsement',
        data: {
          successYn,
          errMesg
        }
      };
    }
  } catch (error) {
    await connection.execute(`ROLLBACK`).catch(() => {});
    console.error('Error executing PR_CREATE_ENDT:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = {
  createEndt
};
