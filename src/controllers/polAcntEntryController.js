const { get } = require('../services/polAcntEntryService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  try {
    const { polSysId,polEndNoIdx,polEndSrNo } = req.query;
    const data = await get(polSysId,polEndNoIdx,polEndSrNo);

    return successResponse(res, 200,  'data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch  data', error.message || error);
  }
};
