module.exports = (sequelize, DataTypes) => {
  const PGITPOLCHARGE = sequelize.define('PGITPOLCHARGE', {
       PCHG_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCHG_SYS_ID' 
    }
    ,
   PCHG_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_POL_SYS_ID' 
    }
    ,
   PCHG_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_NO_IDX' 
    }
    ,
   PCHG_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_SR_NO' 
    }
    ,
   PCHG_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_SR_NO' 
    }
    ,
   PCHG_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CODE' 
    }
    ,
   PCHG_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_TYPE' 
    }
    ,
   PCHG_PERC: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PCHG_PERC' 
    }
    ,
   PCHG_CHG_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_FC' 
    }
    ,
   PCHG_CHG_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_1' 
    }
    ,
   PCHG_CHG_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_2' 
    }
    ,
   PCHG_CHG_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_3' 
    }
    ,
   PCHG_ORG_CHG_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_FC' 
    }
    ,
   PCHG_ORG_CHG_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_1' 
    }
    ,
   PCHG_ORG_CHG_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_2' 
    }
    ,
   PCHG_ORG_CHG_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_3' 
    }
    ,
   PCHG_CUST_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PCHG_CUST_SHARE_PERC' 
    }
    ,
   PCHG_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCHG_REC_TYPE' 
    }
    ,
   PCHG_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CR_UID' 
    }
    ,
   PCHG_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCHG_CR_DT' 
    }
    ,
   PCHG_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_UPD_UID' 
    }
    ,
   PCHG_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCHG_UPD_DT' 
    }
    ,
   PCHG_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_COMP_CODE' 
    }
    ,
   PCHG_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DIVN_CODE' 
    }
    ,
   PCHG_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DEPT_CODE' 
    }
    ,
   PCHG_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DS_TYPE' 
    }
    ,
   PCHG_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PROD_CODE' 
    }
    ,
   PCHG_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PREM_CURR_CODE' 
    }
    ,
   PCHG_RATE_PER: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCHG_RATE_PER' 
    }
    ,
   PCHG_MAND_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_MAND_YN' 
    }
    ,
   PCHG_RATE_MODIFIABLE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_RATE_MODIFIABLE_YN' 
    }
    ,
   PCHG_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_01' 
    }
    ,
   PCHG_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_02' 
    }
    ,
   PCHG_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_03' 
    }
    ,
   PCHG_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_04' 
    }
    ,
   PCHG_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_05' 
    }
    ,
   PCHG_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_06' 
    }
    ,
   PCHG_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_07' 
    }
    ,
   PCHG_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_08' 
    }
    ,
   PCHG_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_09' 
    }
    ,
   PCHG_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_10' 
    }
    ,
   PCHG_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_11' 
    }
    ,
   PCHG_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_12' 
    }
    ,
   PCHG_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_13' 
    }
    ,
   PCHG_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_14' 
    }
    ,
   PCHG_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_15' 
    }
    ,
   PCHG_SEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_SEC_SYS_ID' 
    }
    ,
   PCHG_SEC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_SEC_CODE' 
    }
    ,
   PCHG_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_PRAI_SYS_ID' 
    }
    ,
   PCHG_LEVEL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_LEVEL_NO' 
    }
    ,
   PCHG_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_CNCT_SYS_ID' 
    }
    ,
   PCHG_CHARGE_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_CHARGE_MODIFIED_YN' 
    }
    
    }, {
        tableName: 'PGIT_POL_CHARGE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLCHARGE;
};