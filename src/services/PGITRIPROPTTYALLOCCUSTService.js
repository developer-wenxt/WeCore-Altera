const { PGITRIPROPTTYALLOCCUST } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIPROPTTYALLOCCUST.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.getById = async (id) => {
  const item = await PGITRIPROPTTYALLOCCUST.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOCCUST with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};

exports.getBySysId = async (RPTAC_RPTA_SYS_ID, RPTAC_RPTAR_SYS_ID) => {
  const whereClause = {
    RPTAC_RPTA_SYS_ID: RPTAC_RPTA_SYS_ID === undefined || RPTAC_RPTA_SYS_ID === 'null' ? null : RPTAC_RPTA_SYS_ID,
    RPTAC_RPTAR_SYS_ID: RPTAC_RPTAR_SYS_ID === undefined || RPTAC_RPTAR_SYS_ID === 'null' ? null : RPTAC_RPTAR_SYS_ID
  };

  return await PGITRIPROPTTYALLOCCUST.findAll({
    where: whereClause
  });
};

exports.create = async (data) => {
  return await PGITRIPROPTTYALLOCCUST.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITRIPROPTTYALLOCCUST.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOCCUST with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIPROPTTYALLOCCUST.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOCCUST with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};