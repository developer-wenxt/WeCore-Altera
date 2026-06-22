const { createEndt } = require('../services/endBtnService');
const { successResponse, errorResponse } = require('../utils/response');

exports.createEndtController = async (req, res) => {
  try {
    const polSysId = req.query.pol_sys_id || req.body.pol_sys_id || req.query.polSysId || req.body.polSysId;
    const polEndCode = req.query.pol_end_code || req.body.pol_end_code || req.query.polEndCode || req.body.polEndCode;
    const polEndDt = req.query.pol_end_dt || req.body.pol_end_dt || req.query.polEndDt || req.body.polEndDt;
    const polEndEffFmDt = req.query.pol_end_eff_fm_dt || req.body.pol_end_eff_fm_dt || req.query.polEndEffFmDt || req.body.polEndEffFmDt;
    const polEndEffToDt = req.query.pol_end_eff_to_dt || req.body.pol_end_eff_to_dt || req.query.polEndEffToDt || req.body.polEndEffToDt;
    const polAddPremCalcType = req.query.pol_add_prem_calc_type || req.body.pol_add_prem_calc_type || req.query.polAddPremCalcType || req.body.polAddPremCalcType;
    const polRemarks = req.query.pol_remarks || req.body.pol_remarks || req.query.polRemarks || req.body.polRemarks;
    const polEndDesc = req.query.pol_end_desc || req.body.pol_end_desc || req.query.polEndDesc || req.body.polEndDesc;

    if (!polSysId) {
      return errorResponse(res, 400, 'pol_sys_id is required');
    }

    const result = await createEndt({
      polSysId,
      polEndCode,
      polEndDt,
      polEndEffFmDt,
      polEndEffToDt,
      polAddPremCalcType,
      polRemarks,
      polEndDesc
    });

    if (result.success) {
      return successResponse(res, 200, result.message, result.data);
    } else {
      return errorResponse(res, 400, result.message, result.data);
    }
  } catch (error) {
    console.error('EndBtn Controller Error:', error);
    return errorResponse(res, 500, 'Failed to execute PR_CREATE_ENDT', error.message || error);
  }
};
