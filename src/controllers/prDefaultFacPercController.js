const { defaultFacPerc } = require('../services/prDefaultFacPercService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = req.query;

    const polSysId = source.polSysId ?? source.P_POL_SYS_ID ?? null;
    const endNoIdx = source.endNoIdx ?? source.P_END_NO_IDX ?? null;
    const endSrNo = source.endSrNo ?? source.P_END_SR_NO ?? null;
    const defaultAllRiskYn = source.defaultAllRiskYn ?? source.P_DEFAULT_ALL_RISK_YN ?? null;
    const perilClassCode = source.perilClassCode ?? source.P_PERIL_CLASS_CODE ?? null;
    const defaultFacPercVal = source.defaultFacPerc ?? source.P_DEFAULT_FAC_PERC ?? null;

    const result = await defaultFacPerc(
      polSysId,
      endNoIdx,
      endSrNo,
      defaultAllRiskYn,
      perilClassCode,
      defaultFacPercVal
    );

    return successResponse(
      res,
      200,
      'PR_DEFAULT_FAC_PERC executed successfully',
      result.data
    );
  } catch (error) {
    console.error('Error executing PR_DEFAULT_FAC_PERC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_DEFAULT_FAC_PERC calculation',
      error.message || error
    );
  }
};
