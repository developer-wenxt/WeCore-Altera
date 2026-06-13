module.exports = (sequelize, DataTypes) => {
  const PrFprdFppdCalc = sequelize.define(
    'PrFprdFppdCalc',
    {

      P_FPS_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_FPS_SYS_ID',
      },

      P_FPRD_YN: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_FPRD_YN',
      },

      P_FPPD_YN: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_FPPD_YN',
      },

      P_PRAI_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_PRAI_SYS_ID',
      },

      P_PC_CODE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_PC_CODE',
      },

      P_PLACE_PERC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PERC',
      },

      /* ===== OUTPUT PARAMETERS ===== */

      P_PLACE_SI_FC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_SI_FC',
      },

      P_PLACE_SI_LC_1: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_SI_LC_1',
      },

      P_PLACE_SI_LC_2: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_SI_LC_2',
      },

      P_PLACE_SI_LC_3: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_SI_LC_3',
      },

      P_PLACE_PML_FC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PML_FC',
      },

      P_PLACE_PML_LC_1: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PML_LC_1',
      },

      P_PLACE_PML_LC_2: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PML_LC_2',
      },

      P_PLACE_PML_LC_3: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PML_LC_3',
      },

      P_PLACE_PREM_FC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PREM_FC',
      },

      P_PLACE_PREM_LC_1: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PREM_LC_1',
      },

      P_PLACE_PREM_LC_2: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PREM_LC_2',
      },

      P_PLACE_PREM_LC_3: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_PLACE_PREM_LC_3',
      },

      P_FAC_PREM_FC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_FAC_PREM_FC',
      },

      P_FAC_PREM_LC_1: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_FAC_PREM_LC_1',
      },

      P_FAC_PREM_LC_2: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_FAC_PREM_LC_2',
      },

      P_FAC_PREM_LC_3: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_FAC_PREM_LC_3',
      },

      P_FAC_RATE: {
        type: DataTypes.DECIMAL(10, 4),
        allowNull: true,
        field: 'P_FAC_RATE',
      },
    },
    {
      tableName: 'PR_FPRD_FPPD_CALC', // logical / virtual
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrFprdFppdCalc;
};