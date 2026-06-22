const PGITRIPROPTTYALLOCCUSTService = require('../services/PGITRIPROPTTYALLOCCUSTService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await PGITRIPROPTTYALLOCCUSTService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYALLOCCUSTService.getById(req.params.id);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.getBySysId = async (req, res, next) => {
  try {
    const { RPTAC_RPTA_SYS_ID, RPTAC_RPTAR_SYS_ID } = req.query;
    
    if (RPTAC_RPTA_SYS_ID === undefined && RPTAC_RPTAR_SYS_ID === undefined) {
      return res.status(400).json({ 
        status: 400, 
        message: 'At least one of RPTAC_RPTA_SYS_ID or RPTAC_RPTAR_SYS_ID must be provided in query parameters.' 
      });
    }

    const result = await PGITRIPROPTTYALLOCCUSTService.getBySysId(RPTAC_RPTA_SYS_ID, RPTAC_RPTAR_SYS_ID);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYALLOCCUSTService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYALLOCCUSTService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYALLOCCUSTService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};