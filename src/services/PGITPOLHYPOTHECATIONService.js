const { PGITPOLHYPOTHECATION,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLHYPOTHECATION.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextPsecSysId() {
  const result = await sequelize.query( 'SELECT PGI_PHPO_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: sequelize.QueryTypes.SELECT }
  );
  return result[0].NEXTVAL;
}

exports.saveHypothecation = async (data) => {
  const isBulk = Array.isArray(data);
  const payload = isBulk ? data : [data];
  const transaction = await sequelize.transaction();

  try {
    const createdRecords = [];
    const skippedRecords = [];

    for (const item of payload) {
      // If SYS_ID already present → skip
      if (item.PHPO_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        PHPO_POL_SYS_ID,
        PHPO_END_NO_IDX,
        PHPO_END_SR_NO,
        PHPO_LVL_SYS_ID,
        PHPO_LVL_SR_NO,
        PHPO_HYPO_TYPE
      } = item;

      const existing = await PGITPOLHYPOTHECATION.findOne({
        where: {
          PHPO_POL_SYS_ID,
          PHPO_END_NO_IDX,
          PHPO_END_SR_NO,
          PHPO_LVL_SYS_ID,
          PHPO_LVL_SR_NO,
          PHPO_HYPO_TYPE
        },
        transaction
      });

      if (existing) {
        if (!isBulk) {
          // single payload → error
          throw new Error(
            `Duplicate Hypothecation found for POL_SYS_ID ${PHPO_POL_SYS_ID} (Type ${PHPO_HYPO_TYPE})`
          );
        }

        // bulk payload → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            PHPO_POL_SYS_ID,
            PHPO_END_NO_IDX,
            PHPO_END_SR_NO,
            PHPO_LVL_SYS_ID,
            PHPO_LVL_SR_NO,
            PHPO_HYPO_TYPE
          }
        });
        continue;
      }

      const nextId = await getNextPsecSysId();

      const payloadToSave = {
        ...item,
        PHPO_SYS_ID: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PGITPOLHYPOTHECATION.create(payloadToSave, {
        transaction
      });

      createdRecords.push(created);
    }

    await transaction.commit();

    // Response
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

exports.update = async (id, updatedData) =>  {
  const item = await PGITPOLHYPOTHECATION.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLHYPOTHECATION with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLHYPOTHECATION.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLHYPOTHECATION with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PHPO_POL_SYS_ID) => {
  const items = await PGITPOLHYPOTHECATION.findAll({
    where: { PHPO_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PHPO_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
