const { get } = require('../services/endBlkSetupService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  try {
    const { endType,PLD_PROG_CODE,PLD_BLOCK_NAME } = req.query;
    const data = await get(endType,PLD_PROG_CODE,PLD_BLOCK_NAME);

    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch Section data', error.message || error);
  }
};
