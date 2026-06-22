const { PGITRIPROPTTYALLOCRC } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIPROPTTYALLOCRC.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.getById = async (id) => {
  const item = await PGITRIPROPTTYALLOCRC.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOCRC with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};

exports.getBySysId = async (RPTAR_RPTA_SYS_ID) => {
  return await PGITRIPROPTTYALLOCRC.findAll({
    where: { RPTAR_RPTA_SYS_ID: RPTAR_RPTA_SYS_ID }
  });
};

exports.create = async (data) => {
  return await PGITRIPROPTTYALLOCRC.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITRIPROPTTYALLOCRC.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOCRC with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIPROPTTYALLOCRC.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOCRC with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};