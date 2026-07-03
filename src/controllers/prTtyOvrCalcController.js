const { ttyOvrCalc } = require('../services/prTtyOvrCalcService');
const { successResponse, errorResponse } = require('../utils/response');
exports.calc = async (req, res) => {
  try {
    const source = req.method === 'POST' ? req.body : req.query;
    const rptaSysId = source.rptaSysId ?? source.RPTA_SYS_ID ?? null;
    const rptarSysId = source.rptarSysId ?? source.RPTAR_SYS_ID ?? null;
    const percModifiedYn = source.percModifiedYn ?? source.PERC_MODIFIED_YN ?? null;
    const amountModifiedYn = source.amountModifiedYn ?? source.AMOUNT_MODIFIED_YN ?? null;
    const rptaOvrSharePerc = source.rptaOvrSharePerc ?? source.RPTA_OVR_SHARE_PERC ?? null;
    const rptaOvrSiFc = source.rptaOvrSiFc ?? source.RPTA_OVR_SI_FC ?? null;
    const rptaOvrPmlFc = source.rptaOvrPmlFc ?? source.RPTA_OVR_PML_FC ?? null;
    const reallocateYn = source.reallocateYn ?? source.REALLOCATE_YN ?? null;
    const result = await ttyOvrCalc(
      rptaSysId,
      rptarSysId,
      percModifiedYn,
      amountModifiedYn,
      rptaOvrSharePerc,
      rptaOvrSiFc,
      rptaOvrPmlFc,
      reallocateYn
    );
    if (result.data && result.data.errYn === 'Y') {
      return successResponse(
        res,
        200,
        result.data.errMesg || 'Error in calculation',
        result.data
      );
    }
    return successResponse(
      res,
      200,
      result.message,
      result.data
    );
  } catch (error) {
    console.error('Error executing PR_TTY_OVR_CALC:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_TTY_OVR_CALC',
      error.message || error
    );
  }
};
