const { raw } = require('express');
const { PGITPOLRISKSMI, sequelize } = require('../models');
const { Amount } = require('./GET_EXCH_RATEService');

// Helper: Calculate LC values for SI and PREM from the save/update payload
async function calculateSMILCValues(data) {
  const polSysId = data.PRS_POL_SYS_ID;
  const endNoIdx = data.PRS_END_NO_IDX;
  const endSrNo  = data.PRS_END_SR_NO;

  // --- SI conversion ---
  if (data.PRS_SI_FC != null && data.PRS_SI_CURR_CODE) {
    const siResult = await Amount(
      polSysId, endNoIdx, endSrNo,
      data.PRS_SI_CURR_CODE, Number(data.PRS_SI_FC)
    );
    if (siResult && siResult.success) {
      data.PRS_SI_LC_1 = siResult.data.lc1;
      data.PRS_SI_LC_2 = siResult.data.lc2;
      data.PRS_SI_LC_3 = siResult.data.lc3;
    }
  }

  // --- PREM conversion ---
  if (data.PRS_PREM_FC != null && data.PRS_PREM_CURR_CODE) {
    const premResult = await Amount(
      polSysId, endNoIdx, endSrNo,
      data.PRS_PREM_CURR_CODE, Number(data.PRS_PREM_FC)
    );
    if (premResult && premResult.success) {
      data.PRS_PREM_LC_1 = premResult.data.lc1;
      data.PRS_PREM_LC_2 = premResult.data.lc2;
      data.PRS_PREM_LC_3 = premResult.data.lc3;
    }
  }

  return data;
}

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKSMI.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




// exports.create = async (data) => {

//    const nextId=await getNextTranSysId();
//     data.PRS_SYS_ID=nextId;

//   return await PGITPOLRISKSMI.create(data);
// };

exports.update = async (id, updatedData) => {
  const item = await PGITPOLRISKSMI.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKSMI with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }

  // Merge existing record values so the helper has pol_sys_id, end_no_idx, etc.
  const merged = { ...item.toJSON(), ...updatedData };
  await calculateSMILCValues(merged);

  // Copy calculated LC fields back into updatedData
  ['PRS_SI_LC_1','PRS_SI_LC_2','PRS_SI_LC_3','PRS_PREM_LC_1','PRS_PREM_LC_2','PRS_PREM_LC_3']
    .forEach(k => { if (merged[k] !== undefined) updatedData[k] = merged[k]; });

  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKSMI.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKSMI with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRS_POL_SYS_ID, PRS_LVL1_SYS_ID) => {
  const items = await PGITPOLRISKSMI.findAll({
    where: { PRS_POL_SYS_ID, PRS_LVL1_SYS_ID }, raw: true
  });
  const groupedResult = items.reduce((acc, row) => {
    const key = row.PRS_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;

  // return {
  //   success: true,
  //   message: 'Records fetched successfully',
  //   data: items
  // };
};


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
      if (item.PRS_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already exists in payload',
          item
        });
        continue;
      }

      const {
        PRS_POL_SYS_ID,
        PRS_END_NO_IDX,
        PRS_END_SR_NO,
        PRS_SR_NO,
        PRS_PSEC_SYS_ID,
        PRS_LVL1_SYS_ID
      } = item;

      const existing = await PGITPOLRISKSMI.findOne({
        where: {
          PRS_POL_SYS_ID,
          PRS_END_NO_IDX,
          PRS_END_SR_NO,
          PRS_SR_NO,
          PRS_PSEC_SYS_ID,
          PRS_LVL1_SYS_ID
        },
        transaction
      });

      // 🔴 DIFFERENCE HERE
      if (existing) {
        if (!isBulk) {
          // single save → error
          throw new Error(
            `Duplicate Risk Cover found for SR_NO ${PRS_SR_NO} (Risk ${PRS_LVL1_SYS_ID})`
          );
        }

        // bulk save → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            PRS_POL_SYS_ID,
            PRS_END_NO_IDX,
            PRS_END_SR_NO,
            PRS_SR_NO,
            PRS_PSEC_SYS_ID,
            PRS_LVL1_SYS_ID
          }
        });
        continue;
      }

      const nextId = await getNextTranSysId();

      const payloadToSave = {
        ...item,
        PRS_SYS_ID: nextId
      };

      // Calculate LC values for SI and PREM before saving
      await calculateSMILCValues(payloadToSave);

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PGITPOLRISKSMI.create(payloadToSave, {
        transaction
      });

      createdRecords.push(created);
    }

    await transaction.commit();

    // 🔁 Response format
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