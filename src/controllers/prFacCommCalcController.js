const { calculatePrFacComm } = require('../services/prFacCommCalcService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = Object.keys(req.body).length > 0 ? req.body : req.query;
    
    // Extract parameters mapping JSON keys or DB keys to function inputs
    const fpsSysId = source.fpsSysId ?? source.P_FPS_SYS_ID ?? null;
    const fcSysId = source.fcSysId ?? source.P_FC_SYS_ID ?? null;
    const commCode = source.commCode ?? source.P_COMM_CODE ?? null;
    const commPerc = source.commPerc ?? source.P_COMM_PERC ?? null;
    const commOn = source.commOn ?? source.P_COMM_ON ?? null;
    const commCalcType = source.commCalcType ?? source.P_COMM_CALC_TYPE ?? null;

    const data = await calculatePrFacComm(
      fpsSysId,
      fcSysId,
      commCode,
      commPerc,
      commOn,
      commCalcType
    );

    return successResponse(
      res,
      200,
      'PR_FAC_COMM_CALC executed successfully',
      data
    );
  } catch (error) {
    console.error('Error executing PR_FAC_COMM_CALC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_FAC_COMM_CALC calculation',
      error.message || error
    );
  }
};
