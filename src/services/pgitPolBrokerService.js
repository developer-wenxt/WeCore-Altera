const { PGITPOLBROKER: PgitPolBroker, sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolBroker.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pbrk_sys_id = nextId;

//   return await PgitPolBroker.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PgitPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PBRK_POL_SYS_ID) => {
  const items = await PgitPolBroker.findAll({
    where: { PBRK_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PBRK_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};




async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PBRK_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
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
      // If SYS_ID already exists → skip
      if (item.PBRK_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        PBRK_POL_SYS_ID,
        PBRK_END_NO_IDX,
        PBRK_END_SR_NO,
        PBRK_PSEC_SYS_ID,
        PBRK_BRK_CODE,
        PBRK_COMM_CODE
      } = item;

      const existing = await PgitPolBroker.findOne({
        where: {
          PBRK_POL_SYS_ID,
          PBRK_END_NO_IDX,
          PBRK_END_SR_NO,
          PBRK_PSEC_SYS_ID,
          PBRK_BRK_CODE,
          PBRK_COMM_CODE
        },
        transaction
      });

      if (existing) {
        // ❌ Single insert → ERROR
        if (!isBulk) {
          throw new Error(
            `Duplicate Broker not allowed for BRK=${PBRK_BRK_CODE} and COMM=${PBRK_COMM_CODE}`
          );
        }

        // ✅ Bulk insert → SKIP
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            PBRK_POL_SYS_ID,
            PBRK_END_NO_IDX,
            PBRK_END_SR_NO,
            PBRK_PSEC_SYS_ID,
            PBRK_BRK_CODE,
            PBRK_COMM_CODE
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        PBRK_SYS_ID: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PgitPolBroker.create(payloadToSave, {
        transaction
      });

      createdRecords.push(created);
    }

    await transaction.commit();

    // Final response
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