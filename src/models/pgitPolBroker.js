module.exports = (sequelize, DataTypes) => {
  const PGITPOLBROKER = sequelize.define('PGITPOLBROKER', {
       PBRK_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PBRK_CR_DT' 
    }
    ,
   PBRK_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_UPD_UID' 
    }
    ,
   PBRK_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PBRK_UPD_DT' 
    }
    ,
   PBRK_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMP_CODE' 
    }
    ,
   PBRK_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DIVN_CODE' 
    }
    ,
   PBRK_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DEPT_CODE' 
    }
    ,
   PBRK_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DS_TYPE' 
    }
    ,
   PBRK_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_PROD_CODE' 
    }
    ,
   PBRK_COMM_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMM_TYPE' 
    }
    ,
   PBRK_CVR_IND_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CVR_IND_CODE' 
    }
    ,
   PBRK_MAX_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MAX_PERC' 
    }
    ,
   PBRK_MIN_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MIN_PERC' 
    }
    ,
   PBRK_EDITABLE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_EDITABLE_YN' 
    }
    ,
   PBRK_CMNR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CMNR_SYS_ID' 
    }
    ,
   PBRK_ORG_COMM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_PERC' 
    }
    ,
   PBRK_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_01' 
    }
    ,
   PBRK_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_02' 
    }
    ,
   PBRK_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_03' 
    }
    ,
   PBRK_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_04' 
    }
    ,
   PBRK_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_05' 
    }
    ,
   PBRK_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_06' 
    }
    ,
   PBRK_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_07' 
    }
    ,
   PBRK_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_08' 
    }
    ,
   PBRK_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_09' 
    }
    ,
   PBRK_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_10' 
    }
    ,
   PBRK_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_11' 
    }
    ,
   PBRK_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_12' 
    }
    ,
   PBRK_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_13' 
    }
    ,
   PBRK_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_14' 
    }
    ,
   PBRK_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_15' 
    }
    ,
   PBRK_COUNTRY_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COUNTRY_CODE' 
    }
    ,
   PBRK_LOCATION_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_LOCATION_CODE' 
    }
    ,
   PBRK_RISK_SEL_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_RISK_SEL_TYPE' 
    }
    ,
   PBRK_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CNCT_SYS_ID' 
    }
    ,
   PBRK_COMM_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_COMM_MODIFIED_YN' 
    }
    ,
   PBRK_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PBRK_SYS_ID' 
    }
    ,
   PBRK_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_POL_SYS_ID' 
    }
    ,
   PBRK_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_END_SR_NO' 
    }
    ,
   PBRK_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_END_NO_IDX' 
    }
    ,
   PBRK_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_PSEC_SYS_ID' 
    }
    ,
   PBRK_BRK_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_BRK_CODE' 
    }
    ,
   PBRK_CALC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CALC_TYPE' 
    }
    ,
   PBRK_COMM_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CODE' 
    }
    ,
   PBRK_COMM_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_COMM_DESC' 
    }
    ,
   PBRK_COMM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_COMM_PERC' 
    }
    ,
   PBRK_COMM_CURR: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CURR' 
    }
    ,
   PBRK_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_FC' 
    }
    ,
   PBRK_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_1' 
    }
    ,
   PBRK_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_2' 
    }
    ,
   PBRK_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_3' 
    }
    ,
   PBRK_ORG_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_FC' 
    }
    ,
   PBRK_ORG_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_1' 
    }
    ,
   PBRK_ORG_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_2' 
    }
    ,
   PBRK_ORG_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_3' 
    }
    ,
   PBRK_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PBRK_REC_TYPE' 
    }
    ,
   PBRK_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_CR_UID' 
    }
    
    }, {
        tableName: 'PGIT_POL_BROKER',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLBROKER;
};