module.exports = (sequelize, DataTypes) => {
  const PrCalcFacCustPremTax = sequelize.define(
    'PrCalcFacCustPremTax',
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

      P_FC_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'P_FC_SYS_ID',
      },
    },
    {
      tableName: 'PR_CALC_FAC_CUST_PREM_TAX', 
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrCalcFacCustPremTax;
};