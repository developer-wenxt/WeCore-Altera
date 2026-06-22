const { clearFacPerc } = require('../services/prClearFacPercService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = req.query;

    const polSysId = source.polSysId ?? source.P_POL_SYS_ID ?? null;
    const endNoIdx = source.endNoIdx ?? source.P_END_NO_IDX ?? null;
    const endSrNo = source.endSrNo ?? source.P_END_SR_NO ?? null;
    const clearAllRiskYn = source.clearAllRiskYn ?? source.P_CLEAR_ALL_RISK_YN ?? null;
    const perilClassCode = source.perilClassCode ?? source.P_PERIL_CLASS_CODE ?? null;

    const result = await clearFacPerc(
      polSysId,
      endNoIdx,
      endSrNo,
      clearAllRiskYn,
      perilClassCode
    );

    return successResponse(
      res,
      200,
      'PR_CLEAR_FAC_PERC executed successfully',
      result.data
    );
  } catch (error) {
    console.error('Error executing PR_CLEAR_FAC_PERC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_CLEAR_FAC_PERC calculation',
      error.message || error
    );
  }
};
