const { calculatePrFacRetro } = require('../services/prFacRetroCalcService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = Object.keys(req.body).length > 0 ? req.body : req.query;
    
    // Extract parameters mapping JSON keys or DB keys to function inputs
    const fpsSysId = source.fpsSysId ?? source.P_FPS_SYS_ID ?? null;
    const fcSysId = source.fcSysId ?? source.P_FC_SYS_ID ?? null;
    const retroPerc = source.retroPerc ?? source.P_RETRO_PERC ?? null;

    const data = await calculatePrFacRetro(
      fpsSysId,
      fcSysId,
      retroPerc
    );

    return successResponse(
      res,
      200,
      'PR_FAC_RETRO_CALC executed successfully',
      data
    );
  } catch (error) {
    console.error('Error executing PR_FAC_RETRO_CALC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_FAC_RETRO_CALC calculation',
      error.message || error
    );
  }
};
