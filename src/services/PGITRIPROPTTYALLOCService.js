const { PGITRIPROPTTYALLOC } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIPROPTTYALLOC.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.getById = async (keys) => {
  const whereClause = {
    RPTA_POL_SYS_ID: keys.RPTA_POL_SYS_ID,
    RPTA_END_NO_IDX: keys.RPTA_END_NO_IDX,
    RPTA_END_SR_NO: keys.RPTA_END_SR_NO
  };
  
  if (keys.RPTA_RPTDG_SYS_ID !== undefined) {
    whereClause.RPTA_RPTDG_SYS_ID = keys.RPTA_RPTDG_SYS_ID;
  }

  const items = await PGITRIPROPTTYALLOC.findAll({
    where: whereClause
  });
  return items;
};

exports.create = async (data) => {
  return await PGITRIPROPTTYALLOC.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITRIPROPTTYALLOC.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOC with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIPROPTTYALLOC.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOC with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};