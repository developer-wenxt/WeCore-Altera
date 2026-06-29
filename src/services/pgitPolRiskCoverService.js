const { PGITPOLRISKCOVER ,sequelize} = require('../models');
const { Amount } = require('./GET_EXCH_RATEService');

// Helper: Calculate LC values for SI and PREM from the save/update payload
async function calculateLCValues(data) {
  const polSysId    = data.PRC_POL_SYS_ID;
  const endNoIdx    = data.PRC_END_NO_IDX;
  const endSrNo     = data.PRC_END_SR_NO;

  // --- SI conversion ---
  if (data.PRC_SI_FC != null && data.PRC_SI_CURR_CODE) {
    const siResult = await Amount(
      polSysId, endNoIdx, endSrNo,
      data.PRC_SI_CURR_CODE, Number(data.PRC_SI_FC)
    );
    if (siResult && siResult.success) {
      data.PRC_SI_LC_1 = siResult.data.lc1;
      data.PRC_SI_LC_2 = siResult.data.lc2;
      data.PRC_SI_LC_3 = siResult.data.lc3;
    }
  }

  // --- PREM conversion ---
  if (data.PRC_PREM_FC != null && data.PRC_PREM_CURR_CODE) {
    const premResult = await Amount(
      polSysId, endNoIdx, endSrNo,
      data.PRC_PREM_CURR_CODE, Number(data.PRC_PREM_FC)
    );
    if (premResult && premResult.success) {
      data.PRC_PREM_LC_1 = premResult.data.lc1;
      data.PRC_PREM_LC_2 = premResult.data.lc2;
      data.PRC_PREM_LC_3 = premResult.data.lc3;
    }
  }

  return data;
}

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKCOVER.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


exports.update = async (id, updatedData) => {
  const item = await PGITPOLRISKCOVER.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKCOVER with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }

  // Merge existing record values so the helper has pol_sys_id, end_no_idx, etc.
  const merged = { ...item.toJSON(), ...updatedData };
  await calculateLCValues(merged);

  // Copy calculated LC fields back into updatedData
  ['PRC_SI_LC_1','PRC_SI_LC_2','PRC_SI_LC_3','PRC_PREM_LC_1','PRC_PREM_LC_2','PRC_PREM_LC_3']
    .forEach(k => { if (merged[k] !== undefined) updatedData[k] = merged[k]; });

  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKCOVER.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKCOVER with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRC_POL_SYS_ID, PRC_LVL1_SYS_ID) => {

  const whereCondition = {};

  if (PRC_POL_SYS_ID !== undefined && PRC_POL_SYS_ID !== null) {
    whereCondition.PRC_POL_SYS_ID = PRC_POL_SYS_ID;
  }

  if (PRC_LVL1_SYS_ID !== undefined && PRC_LVL1_SYS_ID !== null) {
    whereCondition.PRC_LVL1_SYS_ID = PRC_LVL1_SYS_ID;
  }

  // Optional: if no filters provided, prevent full table fetch
  if (Object.keys(whereCondition).length === 0) {
    throw new Error("At least one filter (PRC_POL_SYS_ID or PRC_LVL1_SYS_ID) is required");
  }

  const items = await PGITPOLRISKCOVER.findAll({
    where: whereCondition,
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PRC_CVR_TYPE;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};

async function getNextTranSysId(transaction) {
  const [result] = await sequelize.query(
    'SELECT PGI_PRS_SYS_ID.NEXTVAL AS nextVal FROM DUAL',
    { transaction }
  );
  return result[0].NEXTVAL || result[0].nextVal;
}

async function getNextTranSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PRS_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
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
      // If SYS_ID already present → skip
      if (item.PRC_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }
 
      const {
        PRC_POL_SYS_ID,
        PRC_END_NO_IDX,
        PRC_END_SR_NO,
        PRC_SR_NO,
        PRC_PSEC_SYS_ID,
        PRC_LVL1_SYS_ID,
        PRC_CVR_TYPE
      } = item;
 
      const existing = await PGITPOLRISKCOVER.findOne({
        where: {
          PRC_POL_SYS_ID,
          PRC_END_NO_IDX,
          PRC_END_SR_NO,
          PRC_SR_NO,
          PRC_PSEC_SYS_ID,
          PRC_LVL1_SYS_ID,
          PRC_CVR_TYPE
        },
        transaction
      });
 
      // 🔴 Difference here
      if (existing) {
        if (!isBulk) {
          // single payload → error
          throw new Error(
            `Duplicate Risk Cover found for SR_NO ${PRC_SR_NO} (Risk ${PRC_CVR_TYPE})`
          );
        }
 
        // bulk payload → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            PRC_POL_SYS_ID,
            PRC_END_NO_IDX,
            PRC_END_SR_NO,
            PRC_SR_NO,
            PRC_PSEC_SYS_ID,
            PRC_LVL1_SYS_ID,
            PRC_CVR_TYPE
          }
        });
        continue;
      }
 
      const nextId = await getNextTranSysId();
 
      const payloadToSave = {
        ...item,
        PRC_SYS_ID: nextId
      };

      // Calculate LC values for SI and PREM before saving
      await calculateLCValues(payloadToSave);
 
      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );
 
      const created = await PGITPOLRISKCOVER.create(payloadToSave, {
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