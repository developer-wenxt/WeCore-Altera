const { PgitFacPlaceRiskDtl } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacPlaceRiskDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitFacPlaceRiskDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitFacPlaceRiskDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlaceRiskDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacPlaceRiskDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlaceRiskDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};

exports.getByPolSysId = async (FPRD_FPS_SYS_ID) => {
  const items = await PgitFacPlaceRiskDtl.findAll({
    where: { FPRD_FPS_SYS_ID },
    raw: true
  });
  return items;
};