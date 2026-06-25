const { PgitPolCondition, sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCondition.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pcon_sys_id = nextId;

//   return await PgitPolCondition.create(data);
// };

exports.update = async (id, updatedData) => {
  const item = await PgitPolCondition.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCondition with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolCondition.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCondition with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PCON_POL_SYS_ID) => {
  const items = await PgitPolCondition.findAll({
    where: { PCON_POL_SYS_ID },raw: true
  });
    const groupedResult = items.reduce((acc, row) => {
    const key = row.PCON_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 

};


//  async function getNextTranSysId() {
//   const [result] = await sequelize.query('SELECT PRS_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
//   return result[0].NEXTVAL || result[0].nextVal;  
// }






async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PCON_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
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
      // Already has SYS_ID → skip
      if (item.PCON_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        PCON_POL_SYS_ID,
        PCON_END_NO_IDX,
        PCON_END_SR_NO,
        PCON_SR_NO,
        PCON_PSEC_SYS_ID,
        PCON_LVL1_SYS_ID
      } = item;

      const existing = await PgitPolCondition.findOne({
        where: {
          PCON_POL_SYS_ID,
          PCON_END_NO_IDX,
          PCON_END_SR_NO,
          PCON_SR_NO,
          PCON_PSEC_SYS_ID,
          PCON_LVL1_SYS_ID
        },
        transaction
      });

      if (existing) {
        // ❌ Single save → error
        if (!isBulk) {
          throw new Error(
            `Duplicate Condition found for SR_NO ${PCON_SR_NO} section ${PCON_PSEC_SYS_ID}  )`
          );
        }

        // ✅ Bulk save → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            PCON_POL_SYS_ID,
            PCON_END_NO_IDX,
            PCON_END_SR_NO,
            PCON_SR_NO,
            PCON_PSEC_SYS_ID,
            PCON_LVL1_SYS_ID
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        PCON_SYS_ID: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PgitPolCondition.create(payloadToSave, {
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