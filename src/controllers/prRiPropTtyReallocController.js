const { riPropTtyRealloc } = require('../services/prRiPropTtyReallocService');
const { successResponse, errorResponse } = require('../utils/response');

exports.realloc = async (req, res) => {
  try {
    const source = req.method === 'POST' ? req.body : req.query;

    const riSysId = source.riSysId ?? source.RI_SYS_ID ?? null;
    const polSysId = source.polSysId ?? source.RI_POL_SYS_ID ?? source.POL_SYS_ID ?? null;
    const endNoIdx = source.endNoIdx ?? source.RI_END_NO_IDX ?? source.END_NO_IDX ?? null;
    const endSrNo = source.endSrNo ?? source.RI_END_SR_NO ?? source.END_SR_NO ?? null;

    if (riSysId === null) {
        return errorResponse(res, 400, 'riSysId is required', null);
    }
    if (polSysId === null) {
        return errorResponse(res, 400, 'polSysId is required', null);
    }

    const result = await riPropTtyRealloc(riSysId, polSysId, endNoIdx, endSrNo);

    if (result.data && result.data.errMsg) {
      return successResponse(
        res,
        200,
        result.data.errMsg,
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
    console.error('Error executing RI Property Treaty Reallocation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute RI Property Treaty Reallocation',
      error.message || error
    );
  }
};
