const { confirmCancelRI } = require('../services/riConCanBtnService');
const { successResponse, errorResponse } = require('../utils/response');

exports.confirmCancelRI = async (req, res) => {
  try {
    const ri_sys_id = req.query.ri_sys_id || req.body.ri_sys_id || req.query.riSysId || req.body.riSysId;

    if (ri_sys_id === undefined || ri_sys_id === null || ri_sys_id === '') {
      return errorResponse(res, 400, 'ri_sys_id query parameter is required');
    }

    const data = await confirmCancelRI(Number(ri_sys_id));

    return successResponse(res, 200, 'RI confirm/cancel executed successfully', data);

  } catch (error) {
    console.error('RI Confirm/Cancel Error:', error);
    return errorResponse(res, 500, 'Failed to execute RI confirm/cancel', error.message || error);
  }
};
