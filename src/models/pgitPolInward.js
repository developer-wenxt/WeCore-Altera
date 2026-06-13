module.exports = (sequelize, DataTypes) => {
  const PgitPolInward = sequelize.define('PgitPolInward', {
       PI_ORG_SHARE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_SI_FC' 
    }
    ,
   PI_ORG_SHARE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_SI_LC_1' 
    }
    ,
   PI_ORG_SHARE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_SI_LC_2' 
    }
    ,
   PI_ORG_SHARE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_SI_LC_3' 
    }
    ,
   PI_ORG_SHARE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_PREM_FC' 
    }
    ,
   PI_ORG_SHARE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_PREM_LC_1' 
    }
    ,
   PI_ORG_SHARE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_PREM_LC_2' 
    }
    ,
   PI_ORG_SHARE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_PREM_LC_3' 
    }
    ,
   PI_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PI_REC_TYPE' 
    }
    ,
   PI_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PI_CR_DT' 
    }
    ,
   PI_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PI_CR_UID' 
    }
    ,
   PI_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PI_UPD_DT' 
    }
    ,
   PI_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_UPD_UID' 
    }
    ,
   PI_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_01' 
    }
    ,
   PI_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_02' 
    }
    ,
   PI_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_03' 
    }
    ,
   PI_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_04' 
    }
    ,
   PI_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_05' 
    }
    ,
   PI_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_COMP_CODE' 
    }
    ,
   PI_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_DIVN_CODE' 
    }
    ,
   PI_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_DEPT_CODE' 
    }
    ,
   PI_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_DS_TYPE' 
    }
    ,
   PI_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_PROD_CODE' 
    }
    ,
   PI_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_06' 
    }
    ,
   PI_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_07' 
    }
    ,
   PI_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_08' 
    }
    ,
   PI_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_09' 
    }
    ,
   PI_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_10' 
    }
    ,
   PI_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_11' 
    }
    ,
   PI_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_12' 
    }
    ,
   PI_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_13' 
    }
    ,
   PI_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_14' 
    }
    ,
   PI_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_FLEX_15' 
    }
    ,
   PI_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PI_CNCT_SYS_ID' 
    }
    ,
   PI_ORG_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PI_ORG_SHARE_PERC' 
    }
    ,
   PI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PI_SYS_ID' 
    }
    ,
   PI_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PI_POL_SYS_ID' 
    }
    ,
   PI_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PI_END_NO_IDX' 
    }
    ,
   PI_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PI_END_SR_NO' 
    }
    ,
   PI_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PI_TYPE' 
    }
    ,
   PI_REF_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PI_REF_NO' 
    }
    ,
   PI_DESC: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PI_DESC' 
    }
    ,
   PI_SI_CURR: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_SI_CURR' 
    }
    ,
   PI_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SI_FC' 
    }
    ,
   PI_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SI_LC_1' 
    }
    ,
   PI_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SI_LC_2' 
    }
    ,
   PI_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SI_LC_3' 
    }
    ,
   PI_PREM_CURR: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PI_PREM_CURR' 
    }
    ,
   PI_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_PREM_FC' 
    }
    ,
   PI_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_PREM_LC_1' 
    }
    ,
   PI_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_PREM_LC_2' 
    }
    ,
   PI_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_PREM_LC_3' 
    }
    ,
   PI_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PI_SHARE_PERC' 
    }
    ,
   PI_SHARE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_SI_FC' 
    }
    ,
   PI_SHARE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_SI_LC_1' 
    }
    ,
   PI_SHARE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_SI_LC_2' 
    }
    ,
   PI_SHARE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_SI_LC_3' 
    }
    ,
   PI_SHARE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_PREM_FC' 
    }
    ,
   PI_SHARE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_PREM_LC_1' 
    }
    ,
   PI_SHARE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_PREM_LC_2' 
    }
    ,
   PI_SHARE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_SHARE_PREM_LC_3' 
    }
    ,
   PI_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SI_FC' 
    }
    ,
   PI_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SI_LC_1' 
    }
    ,
   PI_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SI_LC_2' 
    }
    ,
   PI_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_SI_LC_3' 
    }
    ,
   PI_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_PREM_FC' 
    }
    ,
   PI_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_PREM_LC_1' 
    }
    ,
   PI_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_PREM_LC_2' 
    }
    ,
   PI_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PI_ORG_PREM_LC_3' 
    }
    
    }, {
        tableName: 'PGIT_POL_INWARD',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolInward;
};