module.exports = (sequelize, DataTypes) => {
  const PrCommissionCalc = sequelize.define(
    'PrCommissionCalc',
    {
      P_FPS_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_FPS_SYS_ID',
      },

      P_FC_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_FC_SYS_ID',
      },

      P_COMM_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'P_COMM_CODE',
      },

      P_COMM_PERC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_COMM_PERC',
      },

      P_COMM_ON: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'P_COMM_ON',
      },

      P_COMM_CALC_TYPE: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'P_COMM_CALC_TYPE',
      },

      P_COMM_FC: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_COMM_FC',
      },

      P_COMM_LC_1: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_COMM_LC_1',
      },

      P_COMM_LC_2: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_COMM_LC_2',
      },

      P_COMM_LC_3: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: true,
        field: 'P_COMM_LC_3',
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
      tableName: 'PR_COMM_CALC', 
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrCommissionCalc;
};