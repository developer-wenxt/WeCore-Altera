const { PGITRIINTERFACE } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIINTERFACE.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.getById = async (keys) => {
  const item = await PGITRIINTERFACE.findOne({
    where: {
      RI_POL_SYS_ID: keys.RI_POL_SYS_ID,
      RI_END_NO_IDX: keys.RI_END_NO_IDX,
      RI_END_SR_NO: keys.RI_END_SR_NO
    }
  });
  if (!item) {
    const error = new Error(`PGITRIINTERFACE not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};

exports.create = async (data) => {
  return await PGITRIINTERFACE.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITRIINTERFACE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIINTERFACE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIINTERFACE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIINTERFACE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};