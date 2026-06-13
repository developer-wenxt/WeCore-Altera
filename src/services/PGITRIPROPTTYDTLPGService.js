const { PGITRIPROPTTYDTLPG,sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIPROPTTYDTLPG.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextFoSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_RPTDG_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}

exports.create = async (data) => {
  const nextId = await getNextFoSysId();
  data.RPTDG_SYS_ID = nextId;
  return await PGITRIPROPTTYDTLPG.create(data);
};



// exports.create = async (data) => {
//   return await PGITRIPROPTTYDTLPG.create(data);
// };

exports.update = async (id, updatedData) => {
  const item = await PGITRIPROPTTYDTLPG.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYDTLPG with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIPROPTTYDTLPG.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYDTLPG with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};




exports.getByPolSysId = async (RPTDG_POL_SYS_ID, RPTDG_END_NO_IDX, RPTDG_END_SR_NO) => {
  if (!RPTDG_POL_SYS_ID) {
    throw new Error("RPTDG_POL_SYS_ID is required");
  }

  const whereClause = { RPTDG_POL_SYS_ID };
  
  if (RPTDG_END_NO_IDX !== undefined && !isNaN(RPTDG_END_NO_IDX)) {
    whereClause.RPTDG_END_NO_IDX = RPTDG_END_NO_IDX;
  }
  
  if (RPTDG_END_SR_NO !== undefined && !isNaN(RPTDG_END_SR_NO)) {
    whereClause.RPTDG_END_SR_NO = RPTDG_END_SR_NO;
  }

  const items = await PGITRIPROPTTYDTLPG.findAll({
    where: whereClause,
    raw: true
  });

  return items;
};



exports.getById = async ({ RPTDG_POL_SYS_ID, RPTDG_END_NO_IDX, RPTDG_END_SR_NO }) => {
  const items = await PGITRIPROPTTYDTLPG.findAll({
    where: { RPTDG_POL_SYS_ID, RPTDG_END_NO_IDX, RPTDG_END_SR_NO },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.RPTDG_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; // ✅ no "items" after this
};