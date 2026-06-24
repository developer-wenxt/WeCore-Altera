module.exports = (sequelize, DataTypes) => {
  const PGITPOLDEDUCTIBLE = sequelize.define('PGITPOLDEDUCTIBLE', {
       PCD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCD_SYS_ID' 
    }
    ,
   PCD_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_POL_SYS_ID' 
    }
    ,
   PCD_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_NO_IDX' 
    }
    ,
   PCD_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_SR_NO' 
    }
    ,
   PCD_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PSEC_SYS_ID' 
    }
    ,
   PCD_PRC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRC_SYS_ID' 
    }
    ,
   PCD_PRS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRS_SYS_ID' 
    }
    ,
   PCD_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SYS_ID' 
    }
    ,
   PCD_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SR_NO' 
    }
    ,
   PCD_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SYS_ID' 
    }
    ,
   PCD_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SR_NO' 
    }
    ,
   PCD_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SYS_ID' 
    }
    ,
   PCD_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SR_NO' 
    }
    ,
   PCD_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SYS_ID' 
    }
    ,
   PCD_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SR_NO' 
    }
    ,
   PCD_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SYS_ID' 
    }
    ,
   PCD_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SR_NO' 
    }
    ,
   PCD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CODE' 
    }
    ,
   PCD_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_DESC' 
    }
    ,
   PCD_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_TYPE' 
    }
    ,
   PCD_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCD_PERC' 
    }
    ,
   PCD_VALUE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_FC' 
    }
    ,
   PCD_VALUE_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_1' 
    }
    ,
   PCD_VALUE_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_2' 
    }
    ,
   PCD_VALUE_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_3' 
    }
    ,
   PCD_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCD_REC_TYPE' 
    }
    ,
   PCD_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CR_UID' 
    }
    ,
   PCD_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCD_CR_DT' 
    }
    ,
   PCD_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_UPD_UID' 
    }
    ,
   PCD_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCD_UPD_DT' 
    }
    ,
   PCD_ATTACH_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_LVL_NO' 
    }
    ,
   PCD_ATTACH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_SR_NO' 
    }
    ,
   PCD_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_COMP_CODE' 
    }
    ,
   PCD_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DIVN_CODE' 
    }
    ,
   PCD_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DEPT_CODE' 
    }
    ,
   PCD_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DS_TYPE' 
    }
    ,
   PCD_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_PROD_CODE' 
    }
    ,
   PCD_ORG_VALUE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_FC' 
    }
    ,
   PCD_ORG_VALUE_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_1' 
    }
    ,
   PCD_ORG_VALUE_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_2' 
    }
    ,
   PCD_ORG_VALUE_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_3' 
    }
    ,
   PCD_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_01' 
    }
    ,
   PCD_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_02' 
    }
    ,
   PCD_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_03' 
    }
    ,
   PCD_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_04' 
    }
    ,
   PCD_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_05' 
    }
    ,
   PCD_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_06' 
    }
    ,
   PCD_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_07' 
    }
    ,
   PCD_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_08' 
    }
    ,
   PCD_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_09' 
    }
    ,
   PCD_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_10' 
    }
    ,
   PCD_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_11' 
    }
    ,
   PCD_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_12' 
    }
    ,
   PCD_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_13' 
    }
    ,
   PCD_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_14' 
    }
    ,
   PCD_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_15' 
    }
    ,
   PCD_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_CNCT_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_DEDUCTIBLE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLDEDUCTIBLE;
};