const { calculatePrFacCust } = require('../services/PrFacCustCalcService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = Object.keys(req.body).length > 0 ? req.body : req.query;
    
    // Extract parameters mapping JSON keys or DB keys to function inputs
    const fpsSysId = source.fpsSysId ?? source.P_FPS_SYS_ID ?? null;
    const custCode = source.custCode ?? source.P_CUST_CODE ?? null;
    const brkCode = source.brkCode ?? source.P_BRK_CODE ?? null;
    const custPerc = source.custPerc ?? source.P_CUST_PERC ?? null;
    const premOverriddenYn = source.premOverriddenYn ?? source.P_PREM_OVERRIDDEN_YN ?? 'N';

    const data = await calculatePrFacCust(
      fpsSysId,
      custCode,
      brkCode,
      custPerc,
      premOverriddenYn
    );

    return successResponse(
      res,
      200,
      'PR_FAC_CUST_CALC executed successfully',
      data
    );
  } catch (error) {
    console.error('Error executing PR_FAC_CUST_CALC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_FAC_CUST_CALC calculation',
      error.message || error
    );
  }
};
