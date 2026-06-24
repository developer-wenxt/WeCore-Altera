const pgitPolSectionService = require('../services/pgitPolSectionService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await pgitPolSectionService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await pgitPolSectionService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await pgitPolSectionService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await pgitPolSectionService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};

exports.getByPolSysId = async (req, res, next) => {
  try {
    const { secPolSysId } = req.query;

    if (!secPolSysId) {
      return res.status(400).json({
        success: false,
        message: "secPolSysId is required"
      });
    }

    const result = await pgitPolSectionService.getByPolSysId(Number(secPolSysId));

    return successResponse(res, 200, 'Fetched', result);

  } catch (err) {
    next(err);
  }
};

exports.deleteSectionProcedure = async (req, res, next) => {
  try {
    const { polSysId, psecSysId } = req.body;

    if (!polSysId || !psecSysId) {
      return res.status(400).json({
        success: false,
        message: "polSysId and psecSysId are required"
      });
    }

    const result = await pgitPolSectionService.deleteSectionProcedure(
      Number(polSysId),
      Number(psecSysId)
    );

    return successResponse(res, 200, "Section procedure executed successfully", result);
  } catch (err) {
    next(err);
  }
};
