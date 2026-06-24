const { PGITPOLCHARGE: PgitPolCharge, sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCharge.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pchg_sys_id = nextId;

//   return await PgitPolCharge.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PgitPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PCHG_POL_SYS_ID) => {
  const items = await PgitPolCharge.findAll({
    where: { PCHG_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PCHG_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};







async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PCHG_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
  );
  return result[0].NEXTVAL || result[0].nextVal;
}

exports.saveRiskCover = async (data) => {
  const isBulk = Array.isArray(data);
  const payload = isBulk ? data : [data];
  const transaction = await sequelize.transaction();

  try {
    const createdRecords = [];
    const skippedRecords = [];

    for (const item of payload) {
      // SYS_ID already exists → skip
      if (item.PCHG_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        PCHG_POL_SYS_ID,
        PCHG_END_NO_IDX,
        PCHG_END_SR_NO,
        PCHG_SR_NO
      } = item;

      const existing = await PgitPolCharge.findOne({
        where: {
          PCHG_POL_SYS_ID,
          PCHG_END_NO_IDX,
          PCHG_END_SR_NO,
          PCHG_SR_NO
        },
        transaction
      });

      if (existing) {
        // ❌ Single insert → ERROR
        if (!isBulk) {
          throw new Error(
            `Duplicate Charge not allowed for SR_NO ${PCHG_SR_NO}`
          );
        }

        // ✅ Bulk insert → SKIP
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            PCHG_POL_SYS_ID,
            PCHG_END_NO_IDX,
            PCHG_END_SR_NO,
            PCHG_SR_NO
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        PCHG_SYS_ID: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PgitPolCharge.create(payloadToSave, {
        transaction
      });

      createdRecords.push(created);
    }

    await transaction.commit();

    if (isBulk) {
      return {
        message: 'Bulk save completed',
        savedCount: createdRecords.length,
        skippedCount: skippedRecords.length,
        saved: createdRecords,
        skipped: skippedRecords
      };
    }

    return createdRecords[0];

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};