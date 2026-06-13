const { PgitFacOut, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacOut.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextFoSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_FO_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}

exports.create = async (data) => {
  const nextId = await getNextFoSysId();
  data.FO_SYS_ID = nextId;
  return await PgitFacOut.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitFacOut.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacOut with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacOut.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacOut with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (FO_POL_SYS_ID) => {
  const items = await PgitFacOut.findAll({
    where: { FO_POL_SYS_ID }, 
    raw: true
  });

  // const groupedResult = items.reduce((acc, row) => {
  //   const key = row.FO_SYS_ID; 
  //   (acc[key] ??= []).push(row);
  //   return acc;
  // }, {});

  return items;
};