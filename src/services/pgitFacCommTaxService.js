const { PgitFacCommTax,sequelize,QueryTypes } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacCommTax.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

// exports.create = async (data) => {
//   return await PgitFacCommTax.create(data);
// };


async function getNextFctSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_FCT_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}
exports.create = async (data) => {
  const nextId = await getNextFctSysId();
  data.FCT_SYS_ID = nextId;
  return await PgitFacCommTax.create(data);
};


exports.update = async (id, updatedData) => {
  const item = await PgitFacCommTax.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacCommTax with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacCommTax.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacCommTax with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (FCT_FPS_SYS_ID) => {
  const items = await PgitFacCommTax.findAll({
    where: { FCT_FPS_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.FCT_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
