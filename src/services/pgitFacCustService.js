const { PgitFacCust, sequelize, QueryTypes } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacCust.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

// exports.create = async (data) => {
//   return await PgitFacCust.create(data);
// };


async function getNextFcSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_FC_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}
exports.create = async (data) => {
  const nextId = await getNextFcSysId();
  data.FC_SYS_ID = nextId;
  return await PgitFacCust.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitFacCust.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacCust with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacCust.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacCust with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (FC_FPS_SYS_ID) => {
  const items = await PgitFacCust.findAll({
    where: { FC_FPS_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.FC_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
