const { PgitFacPlacePcDtl , sequelize , QueryTypes } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacPlacePcDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

// exports.create = async (data) => {
//   return await PgitFacPlacePcDtl.create(data);
// };
async function getNextFppdSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_FPPD_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}
exports.create = async (data) => {
  const nextId = await getNextFppdSysId();
  data.FPPD_SYS_ID = nextId;
  return await PgitFacPlacePcDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitFacPlacePcDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlacePcDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacPlacePcDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlacePcDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (FPPD_FPS_SYS_ID) => {
  const items = await PgitFacPlacePcDtl.findAll({
    where: { FPPD_FPS_SYS_ID },
    raw: true
  });

  // const groupedResult = items.reduce((acc, row) => {
  //   const key = row.FPPD_SYS_ID; 
  //   (acc[key] ??= []).push(row);
  //   return acc;
  // }, {});

  return items;
};
