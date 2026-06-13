const { PgitPolCoinComm } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCoinComm.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitPolCoinComm.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitPolCoinComm.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCoinComm with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolCoinComm.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCoinComm with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};