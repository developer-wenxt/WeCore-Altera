module.exports = (sequelize, DataTypes) => {
  const PrFacCustCalc = sequelize.define(
    'PrFacCustCalc',
    {

      P_FPS_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_FPS_SYS_ID',
      },

      P_CUST_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'P_CUST_CODE',
      },

      P_BRK_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'P_BRK_CODE',
      },

      P_CUST_PERC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_CUST_PERC',
      },

      /* ===== INPUT / OUTPUT (depends on procedure logic) ===== */

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

      /* ===== OVERRIDE FLAG ===== */

      P_PREM_OVERRIDDEN_YN: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_PREM_OVERRIDDEN_YN',
      },

      /* ===== OUTPUT PARAMETERS ===== */

      P_OVR_PREM_FC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_OVR_PREM_FC',
      },

      P_OVR_PREM_LC_1: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_OVR_PREM_LC_1',
      },

      P_OVR_PREM_LC_2: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_OVR_PREM_LC_2',
      },

      P_OVR_PREM_LC_3: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_OVR_PREM_LC_3',
      },

      P_NET_PREM_FC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_NET_PREM_FC',
      },

      P_NET_PREM_LC_1: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_NET_PREM_LC_1',
      },

      P_NET_PREM_LC_2: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_NET_PREM_LC_2',
      },

      P_NET_PREM_LC_3: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_NET_PREM_LC_3',
      },
    },
    {
      tableName: 'PR_FAC_CUST_CALC', // logical
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrFacCustCalc;
};