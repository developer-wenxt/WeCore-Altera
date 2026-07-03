const { sequelize } = require('../models');
const oracledb = require('oracledb');
async function ttyOvrCalc(
  rptaSysId = null,
  rptarSysId = null,
  percModifiedYn = null,
  amountModifiedYn = null,
  rptaOvrSharePerc = null,
  rptaOvrSiFc = null,
  rptaOvrPmlFc = null,
  reallocateYn = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });
  try {
    const bindVars = {
      pRptaSysId: { val: rptaSysId === null ? null : Number(rptaSysId), type: oracledb.NUMBER },
      pRptarSysId: { val: rptarSysId === null ? null : Number(rptarSysId), type: oracledb.NUMBER },
      pPercModifiedYn: { val: percModifiedYn, type: oracledb.STRING },
      pAmountModifiedYn: { val: amountModifiedYn, type: oracledb.STRING },
      pRptaOvrSharePerc: { val: rptaOvrSharePerc === null ? null : Number(rptaOvrSharePerc), type: oracledb.NUMBER },
      pRptaOvrSiFc: { val: rptaOvrSiFc === null ? null : Number(rptaOvrSiFc), type: oracledb.NUMBER },
      pRptaOvrPmlFc: { val: rptaOvrPmlFc === null ? null : Number(rptaOvrPmlFc), type: oracledb.NUMBER },
      pReallocateYn: { val: reallocateYn, type: oracledb.STRING },
      pRptaTtySiFc: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtySiLc1: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtySiLc2: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtySiLc3: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPmlFc: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPmlLc1: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPmlLc2: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPmlLc3: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPremFc: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPremLc1: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPremLc2: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pRptaTtyPremLc3: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
      pErrYn: { type: oracledb.STRING, dir: oracledb.BIND_OUT, maxSize: 10 },
      pErrMesg: { type: oracledb.STRING, dir: oracledb.BIND_OUT, maxSize: 4000 }
    };
    const result = await connection.execute(
      `
      DECLARE
        M_RPTA_TTY_SI_FC     NUMBER;
        M_RPTA_TTY_SI_LC_1   NUMBER;
        M_RPTA_TTY_SI_LC_2   NUMBER;
        M_RPTA_TTY_SI_LC_3   NUMBER;
        M_RPTA_TTY_PML_FC    NUMBER;
        M_RPTA_TTY_PML_LC_1  NUMBER;
        M_RPTA_TTY_PML_LC_2  NUMBER;
        M_RPTA_TTY_PML_LC_3  NUMBER;
        M_RPTA_TTY_PREM_FC   NUMBER;
        M_RPTA_TTY_PREM_LC_1 NUMBER;
        M_RPTA_TTY_PREM_LC_2 NUMBER;
        M_RPTA_TTY_PREM_LC_3 NUMBER;
        M_ERR_YN             VARCHAR2(1);
        M_ERR_MESG           VARCHAR2(1000);
      BEGIN
        PR_TTY_OVR_CALC(
          P_RPTA_SYS_ID          => :pRptaSysId,
          P_RPTAR_SYS_ID         => :pRptarSysId,
          P_PERC_MODIFIED_YN     => :pPercModifiedYn,
          P_AMOUNT_MODIFIED_YN   => :pAmountModifiedYn,
          P_RPTA_OVR_SHARE_PERC  => :pRptaOvrSharePerc,
          P_RPTA_OVR_SI_FC       => :pRptaOvrSiFc,
          P_RPTA_OVR_PML_FC      => :pRptaOvrPmlFc,
          P_REALLOCATE_YN        => :pReallocateYn,  
          P_RPTA_TTY_SI_FC       => M_RPTA_TTY_SI_FC,
          P_RPTA_TTY_SI_LC_1     => M_RPTA_TTY_SI_LC_1,
          P_RPTA_TTY_SI_LC_2     => M_RPTA_TTY_SI_LC_2,
          P_RPTA_TTY_SI_LC_3     => M_RPTA_TTY_SI_LC_3,
          P_RPTA_TTY_PML_FC      => M_RPTA_TTY_PML_FC,
          P_RPTA_TTY_PML_LC_1    => M_RPTA_TTY_PML_LC_1,
          P_RPTA_TTY_PML_LC_2    => M_RPTA_TTY_PML_LC_2,
          P_RPTA_TTY_PML_LC_3    => M_RPTA_TTY_PML_LC_3,
          P_RPTA_TTY_PREM_FC     => M_RPTA_TTY_PREM_FC,
          P_RPTA_TTY_PREM_LC_1   => M_RPTA_TTY_PREM_LC_1,
          P_RPTA_TTY_PREM_LC_2   => M_RPTA_TTY_PREM_LC_2,
          P_RPTA_TTY_PREM_LC_3   => M_RPTA_TTY_PREM_LC_3,
          P_ERR_YN               => M_ERR_YN,
          P_ERR_MESG             => M_ERR_MESG
        );
        :pRptaTtySiFc := M_RPTA_TTY_SI_FC;
        :pRptaTtySiLc1 := M_RPTA_TTY_SI_LC_1;
        :pRptaTtySiLc2 := M_RPTA_TTY_SI_LC_2;
        :pRptaTtySiLc3 := M_RPTA_TTY_SI_LC_3;
        :pRptaTtyPmlFc := M_RPTA_TTY_PML_FC;
        :pRptaTtyPmlLc1 := M_RPTA_TTY_PML_LC_1;
        :pRptaTtyPmlLc2 := M_RPTA_TTY_PML_LC_2;
        :pRptaTtyPmlLc3 := M_RPTA_TTY_PML_LC_3;
        :pRptaTtyPremFc := M_RPTA_TTY_PREM_FC;
        :pRptaTtyPremLc1 := M_RPTA_TTY_PREM_LC_1;
        :pRptaTtyPremLc2 := M_RPTA_TTY_PREM_LC_2;
        :pRptaTtyPremLc3 := M_RPTA_TTY_PREM_LC_3;
        :pErrYn := M_ERR_YN;
        :pErrMesg := M_ERR_MESG;
      END;
      `,
      bindVars
    );
    const out = result.outBinds || {};
    return {
      success: true,
      message: 'PR_TTY_OVR_CALC executed successfully',
      data: {
        rptaTtySiFc: out.pRptaTtySiFc,
        rptaTtySiLc1: out.pRptaTtySiLc1,
        rptaTtySiLc2: out.pRptaTtySiLc2,
        rptaTtySiLc3: out.pRptaTtySiLc3,
        rptaTtyPmlFc: out.pRptaTtyPmlFc,
        rptaTtyPmlLc1: out.pRptaTtyPmlLc1,
        rptaTtyPmlLc2: out.pRptaTtyPmlLc2,
        rptaTtyPmlLc3: out.pRptaTtyPmlLc3,
        rptaTtyPremFc: out.pRptaTtyPremFc,
        rptaTtyPremLc1: out.pRptaTtyPremLc1,
        rptaTtyPremLc2: out.pRptaTtyPremLc2,
        rptaTtyPremLc3: out.pRptaTtyPremLc3,
        errYn: out.pErrYn,
        errMesg: out.pErrMesg
      }
    };
  } catch (error) {
    console.error('Error executing PR_TTY_OVR_CALC:', error);
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}
module.exports = {
  ttyOvrCalc
};
