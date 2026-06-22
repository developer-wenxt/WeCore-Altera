const PGITRIINTERFACEService = require('../services/PGITRIINTERFACEService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await PGITRIINTERFACEService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { RI_POL_SYS_ID, RI_END_NO_IDX, RI_END_SR_NO } = req.query;

    if (
      RI_POL_SYS_ID === undefined ||
      RI_END_NO_IDX === undefined ||
      RI_END_SR_NO === undefined
    ) {
      return res.status(400).json({
        message: 'RI_POL_SYS_ID, RI_END_NO_IDX, and RI_END_SR_NO are required'
      });
    }

    const result = await PGITRIINTERFACEService.getById({
      RI_POL_SYS_ID: Number(RI_POL_SYS_ID),
      RI_END_NO_IDX: Number(RI_END_NO_IDX),
      RI_END_SR_NO: Number(RI_END_SR_NO)
    });

    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await PGITRIINTERFACEService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await PGITRIINTERFACEService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await PGITRIINTERFACEService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};