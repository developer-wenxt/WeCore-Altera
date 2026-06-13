module.exports = (sequelize, DataTypes) => {
  const PgitPolCoinPartCust = sequelize.define('PgitPolCoinPartCust', {
       PCPC_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_PREM_LC_3' 
    }
    ,
   PCPC_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCPC_REC_TYPE' 
    }
    ,
   PCPC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCPC_CR_UID' 
    }
    ,
   PCPC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCPC_CR_DT' 
    }
    ,
   PCPC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_UPD_UID' 
    }
    ,
   PCPC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCPC_UPD_DT' 
    }
    ,
   PCPC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_01' 
    }
    ,
   PCPC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_02' 
    }
    ,
   PCPC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_03' 
    }
    ,
   PCPC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_04' 
    }
    ,
   PCPC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_05' 
    }
    ,
   PCPC_PI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCPC_PI_SYS_ID' 
    }
    ,
   PCPC_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_COMP_CODE' 
    }
    ,
   PCPC_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_DIVN_CODE' 
    }
    ,
   PCPC_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_DEPT_CODE' 
    }
    ,
   PCPC_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_DS_TYPE' 
    }
    ,
   PCPC_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_PROD_CODE' 
    }
    ,
   PCPC_ORG_FO_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_FO_LC_1' 
    }
    ,
   PCPC_ORG_FO_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_FO_FC' 
    }
    ,
   PCPC_ORG_FO_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_FO_LC_2' 
    }
    ,
   PCPC_ORG_FO_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_FO_LC_3' 
    }
    ,
   PCPC_SI_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_SI_CURR_CODE' 
    }
    ,
   PCPC_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCPC_PREM_CURR_CODE' 
    }
    ,
   PCPC_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_06' 
    }
    ,
   PCPC_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_07' 
    }
    ,
   PCPC_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_08' 
    }
    ,
   PCPC_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_09' 
    }
    ,
   PCPC_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_10' 
    }
    ,
   PCPC_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_11' 
    }
    ,
   PCPC_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_12' 
    }
    ,
   PCPC_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_13' 
    }
    ,
   PCPC_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_14' 
    }
    ,
   PCPC_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCPC_FLEX_15' 
    }
    ,
   PCPC_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCPC_CNCT_SYS_ID' 
    }
    ,
   PCPC_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCPC_PRAI_SYS_ID' 
    }
    ,
   PCPC_POOL_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PCPC_POOL_ID' 
    }
    ,
   PCPC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCPC_SYS_ID' 
    }
    ,
   PCPC_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCPC_POL_SYS_ID' 
    }
    ,
   PCPC_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCPC_END_NO_IDX' 
    }
    ,
   PCPC_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCPC_END_SR_NO' 
    }
    ,
   PCPC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCPC_TYPE' 
    }
    ,
   PCPC_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCPC_CUST_CODE' 
    }
    ,
   PCPC_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCPC_SHARE_PERC' 
    }
    ,
   PCPC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_SI_FC' 
    }
    ,
   PCPC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_SI_LC_1' 
    }
    ,
   PCPC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_SI_LC_2' 
    }
    ,
   PCPC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_SI_LC_3' 
    }
    ,
   PCPC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_PREM_FC' 
    }
    ,
   PCPC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_PREM_LC_1' 
    }
    ,
   PCPC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_PREM_LC_2' 
    }
    ,
   PCPC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_PREM_LC_3' 
    }
    ,
   PCPC_FO_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_FO_FC' 
    }
    ,
   PCPC_FO_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_FO_LC_1' 
    }
    ,
   PCPC_FO_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_FO_LC_2' 
    }
    ,
   PCPC_FO_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_FO_LC_3' 
    }
    ,
   PCPC_LEADER_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCPC_LEADER_YN' 
    }
    ,
   PCPC_INTER_OFF_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCPC_INTER_OFF_YN' 
    }
    ,
   PCPC_ORG_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCPC_ORG_SHARE_PERC' 
    }
    ,
   PCPC_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_SI_FC' 
    }
    ,
   PCPC_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_SI_LC_1' 
    }
    ,
   PCPC_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_SI_LC_2' 
    }
    ,
   PCPC_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_SI_LC_3' 
    }
    ,
   PCPC_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_PREM_FC' 
    }
    ,
   PCPC_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_PREM_LC_1' 
    }
    ,
   PCPC_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCPC_ORG_PREM_LC_2' 
    }
    
    }, {
        tableName: 'PGIT_POL_COIN_PART_CUST',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolCoinPartCust;
};