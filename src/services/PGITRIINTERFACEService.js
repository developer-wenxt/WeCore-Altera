const { PGITRIINTERFACE,sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIINTERFACE.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextFoSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_RI_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}

exports.create = async (data) => {
  const nextId = await getNextFoSysId();
  data.RI_SYS_ID = nextId;
  return await PGITRIINTERFACE.create(data);
};




// exports.create = async (data) => {
//   return await PGITRIINTERFACE.create(data);
// };

exports.update = async (id, updatedData) => {
  const item = await PGITRIINTERFACE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIINTERFACE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIINTERFACE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIINTERFACE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getById = async (id) => {
  const item = await PGITRIINTERFACE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIINTERFACE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};

exports.getByPolSysId = async (RI_POL_SYS_ID, RI_END_NO_IDX, RI_END_SR_NO) => {
  if (!RI_POL_SYS_ID) {
    throw new Error("RI_POL_SYS_ID is required");
  }

  const whereClause = { RI_POL_SYS_ID };
  
  if (RI_END_NO_IDX !== undefined && !isNaN(RI_END_NO_IDX)) {
    whereClause.RI_END_NO_IDX = RI_END_NO_IDX;
  }
  
  if (RI_END_SR_NO !== undefined && !isNaN(RI_END_SR_NO)) {
    whereClause.RI_END_SR_NO = RI_END_SR_NO;
  }

  const items = await PGITRIINTERFACE.findAll({
    where: whereClause,
    raw: true
  });

  return items;
};