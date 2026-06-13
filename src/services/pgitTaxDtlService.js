const { PgitTaxDtl ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitTaxDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT TXD_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.txd_sys_id = nextId;

  return await PgitTaxDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitTaxDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitTaxDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitTaxDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitTaxDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (TXD_POL_SYS_ID, TXD_END_NO_IDX, TXD_END_SR_NO) => {

  if (!TXD_POL_SYS_ID || TXD_END_NO_IDX === undefined || TXD_END_SR_NO === undefined) {
    throw new Error("TXD_POL_SYS_ID, TXD_END_NO_IDX and TXD_END_SR_NO are required");
  }

  const items = await PgitTaxDtl.findAll({
    where: {
      TXD_POL_SYS_ID,
      TXD_END_NO_IDX,
      TXD_END_SR_NO
    },
    raw: true
  });

  return items;
};