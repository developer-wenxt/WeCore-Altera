const { PgitRiPolRiskDtl, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitRiPolRiskDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};
//PGI_RPRD_SYS_ID
async function getNextRprdSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_RPRD_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}
exports.create = async (data) => {
  const nextId = await getNextRprdSysId();
  data.RPRD_SYS_ID = nextId;
  return await PgitRiPolRiskDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitRiPolRiskDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitRiPolRiskDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitRiPolRiskDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitRiPolRiskDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


// exports.getByPolSysId = async (RPRD_POL_SYS_ID) => {
//   const items = await PgitRiPolRiskDtl.findAll({
//     where: { RPRD_POL_SYS_ID },
//     raw: true
//   });

//   if (!items.length) return {};

//   const groupedResult = items.reduce((acc, row) => {
//     const key = row.RPRD_RPTDG_SYS_ID ?? 'unknown';
//     (acc[key] ??= []).push(row);
//     return acc;
//   }, {});

//   return groupedResult;
// };
exports.getByPolSysId = async (RPRD_POL_SYS_ID, RPRD_END_NO_IDX, RPRD_END_SR_NO) => {
  const whereClause = { RPRD_POL_SYS_ID };
  if (RPRD_END_NO_IDX !== undefined) {
    whereClause.RPRD_END_NO_IDX = RPRD_END_NO_IDX;
  }
  if (RPRD_END_SR_NO !== undefined) {
    whereClause.RPRD_END_SR_NO = RPRD_END_SR_NO;
  }

  const items = await PgitRiPolRiskDtl.findAll({
    where: whereClause,
    raw: true
  });

  return items;
};