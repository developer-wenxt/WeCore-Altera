const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

async function approveTtyAlloc(riSysId) {
  try {
    const result = await sequelize.query(
      `
      BEGIN
        PR_APPR_TTY_ALLOC(P_RI_SYS_ID => :riSysId);
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
      message: 'Treaty allocation approved successfully',
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  approveTtyAlloc,
};
