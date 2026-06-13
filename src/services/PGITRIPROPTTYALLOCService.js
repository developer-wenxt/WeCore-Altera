const { PGITRIPROPTTYALLOC,sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIPROPTTYALLOC.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextFoSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_RPTA_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}

exports.create = async (data) => {
  const nextId = await getNextFoSysId();
  data.RI_SYS_ID = nextId;
  return await PGITRIPROPTTYALLOC.create(data);
};



// exports.create = async (data) => {
//   return await PGITRIPROPTTYALLOC.create(data);
// };

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




exports.getByPolSysId = async (RPTA_POL_SYS_ID, RPTA_END_NO_IDX, RPTA_END_SR_NO) => {
  if (!RPTA_POL_SYS_ID) {
    throw new Error("RPTA_POL_SYS_ID is required");
  }

  const whereClause = { RPTA_POL_SYS_ID };
  
  if (RPTA_END_NO_IDX !== undefined && !isNaN(RPTA_END_NO_IDX)) {
    whereClause.RPTA_END_NO_IDX = RPTA_END_NO_IDX;
  }
  
  if (RPTA_END_SR_NO !== undefined && !isNaN(RPTA_END_SR_NO)) {
    whereClause.RPTA_END_SR_NO = RPTA_END_SR_NO;
  }

  const items = await PGITRIPROPTTYALLOC.findAll({
    where: whereClause,
    raw: true
  });

  return items;
};



exports.getById = async ({ RPTA_POL_SYS_ID, RPTA_END_NO_IDX, RPTA_END_SR_NO }) => {
  const items = await PGITRIPROPTTYALLOC.findAll({
    where: { RPTA_POL_SYS_ID, RPTA_END_NO_IDX, RPTA_END_SR_NO },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.RPTA_RPTDG_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};