const { getClassOfBus } = require('../services/class_of_busService');
const { successResponse, errorResponse } = require('../utils/response');


exports.getClassOfBus = async (req, res) => {
  try {
    const data = await getClassOfBus();
    return successResponse(res, 200, 'Business data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch business data', error.message);
  }
};
