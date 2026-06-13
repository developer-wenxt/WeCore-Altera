module.exports = (sequelize, DataTypes) => {
  const PgitPolCoinComm = sequelize.define('PgitPolCoinComm', {
       PCC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCC_SYS_ID' 
    }
    ,
   PCC_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCC_POL_SYS_ID' 
    }
    ,
   PCC_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCC_END_NO_IDX' 
    }
    ,
   PCC_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCC_END_SR_NO' 
    }
    ,
   PCC_PI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCC_PI_SYS_ID' 
    }
    ,
   PCC_PCPC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCC_PCPC_SYS_ID' 
    }
    ,
   PCC_CT_FLAG: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCC_CT_FLAG' 
    }
    ,
   PCC_CT_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_CT_TYPE' 
    }
    ,
   PCC_CT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_CT_CODE' 
    }
    ,
   PCC_CT_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCC_CT_PERC' 
    }
    ,
   PCC_CT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_CT_FC' 
    }
    ,
   PCC_CT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_CT_LC_1' 
    }
    ,
   PCC_CT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_CT_LC_2' 
    }
    ,
   PCC_CT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_CT_LC_3' 
    }
    ,
   PCC_ORG_CT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_ORG_CT_FC' 
    }
    ,
   PCC_ORG_CT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_ORG_CT_LC_1' 
    }
    ,
   PCC_ORG_CT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_ORG_CT_LC_2' 
    }
    ,
   PCC_ORG_CT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCC_ORG_CT_LC_3' 
    }
    ,
   PCC_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCC_REC_TYPE' 
    }
    ,
   PCC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCC_CR_DT' 
    }
    ,
   PCC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCC_CR_UID' 
    }
    ,
   PCC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCC_UPD_DT' 
    }
    ,
   PCC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_UPD_UID' 
    }
    ,
   PCC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_01' 
    }
    ,
   PCC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_02' 
    }
    ,
   PCC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_03' 
    }
    ,
   PCC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_04' 
    }
    ,
   PCC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_05' 
    }
    ,
   PCC_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_COMP_CODE' 
    }
    ,
   PCC_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_DIVN_CODE' 
    }
    ,
   PCC_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_DEPT_CODE' 
    }
    ,
   PCC_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_DS_TYPE' 
    }
    ,
   PCC_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_PROD_CODE' 
    }
    ,
   PCC_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCC_CURR_CODE' 
    }
    ,
   PCC_ORG_CT_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCC_ORG_CT_PERC' 
    }
    ,
   PCC_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_06' 
    }
    ,
   PCC_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_07' 
    }
    ,
   PCC_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_08' 
    }
    ,
   PCC_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_09' 
    }
    ,
   PCC_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_10' 
    }
    ,
   PCC_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_11' 
    }
    ,
   PCC_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_12' 
    }
    ,
   PCC_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_13' 
    }
    ,
   PCC_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_14' 
    }
    ,
   PCC_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCC_FLEX_15' 
    }
    ,
   PCC_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCC_CNCT_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_COIN_COMM',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolCoinComm;
};