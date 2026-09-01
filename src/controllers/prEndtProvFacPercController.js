const { endtProvFacPerc } = require('../services/prEndtProvFacPercService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculate = async (req, res) => {
  try {
    const source = req.query;

    const polSysId = source.polSysId ?? source.P_POL_SYS_ID ?? null;
    const endNoIdx = source.endNoIdx ?? source.P_END_NO_IDX ?? null;
    const endSrNo = source.endSrNo ?? source.P_END_SR_NO ?? null;

    const result = await endtProvFacPerc(
      polSysId,
      endNoIdx,
      endSrNo
    );

    return successResponse(
      res,
      200,
      'PR_ENDT_PROV_FAC_PERC executed successfully',
      result.data
    );
  } catch (error) {
    console.error('Error executing PR_ENDT_PROV_FAC_PERC calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute PR_ENDT_PROV_FAC_PERC calculation',
      error.message || error
    );
  }
};
