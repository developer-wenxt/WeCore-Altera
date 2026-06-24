module.exports = (sequelize, DataTypes) => {
  const PgitPolCondition = sequelize.define('PgitPolCondition', {
       PCON_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCON_SYS_ID' 
    }
    ,
   PCON_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_POL_SYS_ID' 
    }
    ,
   PCON_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_NO_IDX' 
    }
    ,
   PCON_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_SR_NO' 
    }
    ,
   PCON_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_SR_NO' 
    }
    ,
   PCON_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CODE' 
    }
    ,
   PCON_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCON_DESC' 
    }
    ,
   PCON_LONG_DESC: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC' 
    }
    ,
   PCON_VALUE: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCON_VALUE' 
    }
    ,
   PCON_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCON_REC_TYPE' 
    }
    ,
   PCON_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CR_UID' 
    }
    ,
   PCON_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCON_CR_DT' 
    }
    ,
   PCON_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_UPD_UID' 
    }
    ,
   PCON_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCON_UPD_DT' 
    }
    ,
   PCON_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_COMP_CODE' 
    }
    ,
   PCON_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DIVN_CODE' 
    }
    ,
   PCON_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DEPT_CODE' 
    }
    ,
   PCON_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DS_TYPE' 
    }
    ,
   PCON_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_PROD_CODE' 
    }
    ,
   PCON_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_01' 
    }
    ,
   PCON_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_02' 
    }
    ,
   PCON_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_03' 
    }
    ,
   PCON_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_04' 
    }
    ,
   PCON_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_05' 
    }
    ,
   PCON_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_06' 
    }
    ,
   PCON_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_07' 
    }
    ,
   PCON_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_08' 
    }
    ,
   PCON_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_09' 
    }
    ,
   PCON_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_10' 
    }
    ,
   PCON_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_11' 
    }
    ,
   PCON_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_12' 
    }
    ,
   PCON_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_13' 
    }
    ,
   PCON_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_14' 
    }
    ,
   PCON_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_15' 
    }
    ,
   PCON_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PSEC_SYS_ID' 
    }
    ,
   PCON_PRC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRC_SYS_ID' 
    }
    ,
   PCON_PRS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRS_SYS_ID' 
    }
    ,
   PCON_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SYS_ID' 
    }
    ,
   PCON_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SR_NO' 
    }
    ,
   PCON_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SYS_ID' 
    }
    ,
   PCON_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SR_NO' 
    }
    ,
   PCON_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SYS_ID' 
    }
    ,
   PCON_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SR_NO' 
    }
    ,
   PCON_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SYS_ID' 
    }
    ,
   PCON_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SR_NO' 
    }
    ,
   PCON_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SYS_ID' 
    }
    ,
   PCON_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SR_NO' 
    }
    ,
   PCON_PCD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PCD_SYS_ID' 
    }
    ,
   PCON_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_TYPE' 
    }
    ,
   PCON_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_CNCT_SYS_ID' 
    }
    ,
   PCON_LONG_DESC1: { 
      type: DataTypes.STRING(2400), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC1' 
    }
    ,
   PCON_LONG_DESC2: { 
      type: DataTypes.STRING(2400), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC2' 
    }
    
    }, {
        tableName: 'PGIT_POL_CONDITION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolCondition;
};