const { executePrRiPropTtyAlloc } = require('../services/prRiPropTtyAllocService');
const { successResponse, errorResponse } = require('../utils/response');

exports.execute = async (req, res) => {
  try {
    const source = Object.keys(req.body).length > 0 ? req.body : req.query;
    
    const pPolSysId = source.pPolSysId ?? source.P_POL_SYS_ID ?? null;
    const pEndNoIdx = source.pEndNoIdx ?? source.P_POL_END_NO_IDX ?? null;
    const pEndSrNo = source.pEndSrNo ?? source.P_POL_END_SR_NO ?? null;

    if (pPolSysId === null || pEndNoIdx === null || pEndSrNo === null) {
        return errorResponse(res, 400, 'Missing required parameters');
    }

    const data = await executePrRiPropTtyAlloc(
      pPolSysId,
      pEndNoIdx,
      pEndSrNo
    );

    return successResponse(
      res,
      200,
      'PR_RI_PROP_TTY_ALLOC executed successfully',
      data
    );
  } catch (error) {
    console.error('Error executing PR_RI_PROP_TTY_ALLOC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_RI_PROP_TTY_ALLOC calculation',
      error.message || error
    );
  }
};
