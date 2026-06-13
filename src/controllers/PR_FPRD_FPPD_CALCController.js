const { calculatePrFprdFppd } = require('../services/PR_FPRD_FPPD_CALCService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = Object.keys(req.body).length > 0 ? req.body : req.query;
    
    const fpsSysId = source.fpsSysId ?? source.P_FPS_SYS_ID ?? null;
    const fprdYn = source.fprdYn ?? source.P_FPRD_YN ?? 'Y';
    const fppdYn = source.fppdYn ?? source.P_FPPD_YN ?? 'Y';
    const praiSysId = source.praiSysId ?? source.P_PRAI_SYS_ID ?? null;
    const pcCode = source.pcCode ?? source.P_PC_CODE ?? null;
    const placePerc = source.placePerc ?? source.P_PLACE_PERC ?? null;

    const data = await calculatePrFprdFppd(
      fpsSysId,
      fprdYn,
      fppdYn,
      praiSysId,
      pcCode,
      placePerc
    );

    return successResponse(
      res,
      200,
      'PR_FPRD_FPPD_CALC executed successfully',
      data
    );
  } catch (error) {
    console.error('Error executing PR_FPRD_FPPD_CALC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_FPRD_FPPD_CALC calculation',
      error.message || error
    );
  }
};
