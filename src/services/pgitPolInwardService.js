const { PgitPolInward } = require('../models');

exports.getById = async (PI_POL_SYS_ID, PI_END_NO_IDX, PI_END_SR_NO) => {
  const item = await PgitPolInward.findOne({
    where: {
      PI_POL_SYS_ID,
      PI_END_NO_IDX,
      PI_END_SR_NO
    }
  });
  if (!item) {
    const error = new Error(`PgitPolInward not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolInward.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitPolInward.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitPolInward.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolInward with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolInward.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolInward with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};