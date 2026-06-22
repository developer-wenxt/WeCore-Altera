const { approveTtyAlloc } = require('../services/ttyApproveBtnService');
const { successResponse, errorResponse } = require('../utils/response');

exports.approveTtyAlloc = async (req, res) => {
  try {
    const ri_sys_id = req.query.ri_sys_id || req.body.ri_sys_id || req.query.riSysId || req.body.riSysId;

    if (ri_sys_id === undefined || ri_sys_id === null || ri_sys_id === '') {
      return errorResponse(res, 400, 'ri_sys_id parameter is required');
    }

    const data = await approveTtyAlloc(Number(ri_sys_id));

    return successResponse(res, 200, 'Treaty allocation approved successfully', data);

  } catch (error) {
    console.error('Treaty Approve Error:', error);
    return errorResponse(res, 500, 'Failed to approve treaty allocation', error.message || error);
  }
};
