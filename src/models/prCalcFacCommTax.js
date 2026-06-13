module.exports = (sequelize, DataTypes) => {
  const PrCalcFacCommTax = sequelize.define(
    'PrCalcFacCommTax',
    {
      P_FO_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_FO_SYS_ID',
      },

      P_FPS_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_FPS_SYS_ID',
      },

      P_PLACE_IDX: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_PLACE_IDX',
      },
    },
    {
      tableName: 'PR_CALC_FAC_COMM_TAX', 
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrCalcFacCommTax;
};