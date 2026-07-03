const { cancelEndorsement } = require('../services/prCancelEndorsementService');
const { successResponse, errorResponse } = require('../utils/response');

exports.cancel = async (req, res) => {
  try {
    const source = req.method === 'POST' ? req.body : req.query;

    const polSysId = source.polSysId ?? source.POL_SYS_ID ?? null;
    const endNoIdx = source.endNoIdx ?? source.END_NO_IDX ?? null;
    const endSrNo = source.endSrNo ?? source.END_SR_NO ?? null;

    if (polSysId === null) {
        return errorResponse(res, 400, 'polSysId is required', null);
    }

    const result = await cancelEndorsement(polSysId, endNoIdx, endSrNo);

    return successResponse(
      res,
      200,
      'Endorsement cancelled successfully',
      result.data
    );
  } catch (error) {
    console.error('Error executing cancel endorsement:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute cancel endorsement',
      error.message || error
    );
  }
};
