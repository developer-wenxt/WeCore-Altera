  const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

async function confirmCancelRI(riSysId) {
  try {
    const result = await sequelize.query(
      `
      BEGIN
        PR_RI_CONFIRM_CANCEL(P_RI_SYS_ID => :riSysId);
      END;
      `,
      {
        replacements: {
          riSysId: Number(riSysId)
        },
        type: QueryTypes.RAW,
      }
    );

    return {
      success: true,
      message: 'RI cancel completed successfully',
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  confirmCancelRI,
};
