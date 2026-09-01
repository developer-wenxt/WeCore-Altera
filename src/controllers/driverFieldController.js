const { get } = require('../services/driverFieldService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  try {
    const { section_code, product_code } = req.query;
    
    if (!section_code || !product_code ) {
      return errorResponse(res, 400, 'Missing required query parameters: section_code, product_code');
    }

    const data = await get(section_code, product_code);

    return successResponse(res, 200, 'Button fields fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch Button fields data', error.message || error);
  }
};
