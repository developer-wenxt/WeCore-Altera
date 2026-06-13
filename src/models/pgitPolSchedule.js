module.exports = (sequelize, DataTypes) => {
  const PgitPolSchedule = sequelize.define('PgitPolSchedule', {
       PS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PS_SYS_ID' 
    }
    ,
   PS_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PS_POL_SYS_ID' 
    }
    ,
   PS_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PS_END_NO_IDX' 
    }
    ,
   PS_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PS_END_SR_NO' 
    }
    ,
   PS_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PS_SR_NO' 
    }
    ,
   PS_FIELD_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_01' 
    }
    ,
   PS_FIELD_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_02' 
    }
    ,
   PS_FIELD_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_03' 
    }
    ,
   PS_FIELD_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_04' 
    }
    ,
   PS_FIELD_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_05' 
    }
    ,
   PS_FIELD_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_06' 
    }
    ,
   PS_FIELD_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_07' 
    }
    ,
   PS_FIELD_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_08' 
    }
    ,
   PS_FIELD_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_09' 
    }
    ,
   PS_FIELD_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_10' 
    }
    ,
   PS_FIELD_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_11' 
    }
    ,
   PS_FIELD_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_12' 
    }
    ,
   PS_FIELD_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_13' 
    }
    ,
   PS_FIELD_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_14' 
    }
    ,
   PS_FIELD_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_15' 
    }
    ,
   PS_FIELD_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_16' 
    }
    ,
   PS_FIELD_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_17' 
    }
    ,
   PS_FIELD_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_18' 
    }
    ,
   PS_FIELD_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_19' 
    }
    ,
   PS_FIELD_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FIELD_20' 
    }
    ,
   PS_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PS_REC_TYPE' 
    }
    ,
   PS_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PS_CR_UID' 
    }
    ,
   PS_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PS_CR_DT' 
    }
    ,
   PS_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PS_UPD_UID' 
    }
    ,
   PS_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PS_UPD_DT' 
    }
    ,
   PS_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PS_COMP_CODE' 
    }
    ,
   PS_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PS_DEPT_CODE' 
    }
    ,
   PS_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PS_DIVN_CODE' 
    }
    ,
   PS_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PS_DS_TYPE' 
    }
    ,
   PS_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PS_PROD_CODE' 
    }
    ,
   PS_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_01' 
    }
    ,
   PS_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_02' 
    }
    ,
   PS_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_03' 
    }
    ,
   PS_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_04' 
    }
    ,
   PS_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_05' 
    }
    ,
   PS_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_06' 
    }
    ,
   PS_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_07' 
    }
    ,
   PS_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_08' 
    }
    ,
   PS_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_09' 
    }
    ,
   PS_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_10' 
    }
    ,
   PS_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_11' 
    }
    ,
   PS_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_12' 
    }
    ,
   PS_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_13' 
    }
    ,
   PS_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_14' 
    }
    ,
   PS_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PS_FLEX_15' 
    }
    ,
   PS_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PS_CNCT_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_SCHEDULE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolSchedule;
};