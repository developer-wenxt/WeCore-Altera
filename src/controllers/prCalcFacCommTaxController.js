const { calcFacCommTax } = require('../services/prCalcFacCommTaxService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = Object.keys(req.body).length > 0 ? req.body : req.query;

    const foSysId  = source.foSysId  ?? source.P_FO_SYS_ID  ?? null;
    const fpsSysId = source.fpsSysId ?? source.P_FPS_SYS_ID ?? null;

    const data = await calcFacCommTax(foSysId, fpsSysId);

    return successResponse(
      res,
      200,
      'PGIPK_TAX_CALC.PR_CALC_FAC_COMM_TAX executed successfully',
      data
    );
  } catch (error) {
    console.error('Error executing PR_CALC_FAC_COMM_TAX:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_CALC_FAC_COMM_TAX',
      error.message || error
    );
  }
};
