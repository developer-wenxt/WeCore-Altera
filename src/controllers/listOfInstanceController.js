const { getList } = require('../services/listOfInstanceService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getList = async (req, res) => {
  try {
    const { classCode } = req.query;
    if (!classCode) {
      return errorResponse(res, 400, 'classCode query parameter is required');
    }
    const data = await getList(classCode);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch class_of_bus data', error.message || error);
  }
};
