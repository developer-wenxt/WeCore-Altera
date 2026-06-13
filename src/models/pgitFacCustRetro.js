module.exports = (sequelize, DataTypes) => {
  const PgitFacCustRetro = sequelize.define('PgitFacCustRetro', {
       FCR_FPS_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FCR_FPS_PLACE_IDX' 
    }
    ,
   FCR_FC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FCR_FC_SYS_ID' 
    }
    ,
   FCR_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCR_CUST_CODE' 
    }
    ,
   FCR_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'FCR_REF_NO' 
    }
    ,
   FCR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(15, 12), 
      allowNull: false, 
      
      field: 'FCR_SHARE_PERC' 
    }
    ,
   FCR_RETRO_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_SI_FC' 
    }
    ,
   FCR_RETRO_SI_LC1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_SI_LC1' 
    }
    ,
   FCR_RETRO_SI_LC2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_SI_LC2' 
    }
    ,
   FCR_RETRO_SI_LC3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_SI_LC3' 
    }
    ,
   FCR_RETRO_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PML_FC' 
    }
    ,
   FCR_RETRO_PML_LC1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PML_LC1' 
    }
    ,
   FCR_RETRO_PML_LC2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PML_LC2' 
    }
    ,
   FCR_RETRO_PML_LC3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PML_LC3' 
    }
    ,
   FCR_RETRO_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PREM_FC' 
    }
    ,
   FCR_RETRO_PREM_LC1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PREM_LC1' 
    }
    ,
   FCR_RETRO_PREM_LC2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PREM_LC2' 
    }
    ,
   FCR_RETRO_PREM_LC3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_RETRO_PREM_LC3' 
    }
    ,
   FCR_ORG_RETRO_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_SI_FC' 
    }
    ,
   FCR_ORG_RETRO_SI_LC1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_SI_LC1' 
    }
    ,
   FCR_ORG_RETRO_SI_LC2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_SI_LC2' 
    }
    ,
   FCR_ORG_RETRO_SI_LC3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_SI_LC3' 
    }
    ,
   FCR_ORG_RETRO_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PML_FC' 
    }
    ,
   FCR_ORG_RETRO_PML_LC1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PML_LC1' 
    }
    ,
   FCR_ORG_RETRO_PML_LC2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PML_LC2' 
    }
    ,
   FCR_ORG_RETRO_PML_LC3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PML_LC3' 
    }
    ,
   FCR_ORG_RETRO_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PREM_FC' 
    }
    ,
   FCR_ORG_RETRO_PREM_LC1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PREM_LC1' 
    }
    ,
   FCR_ORG_RETRO_PREM_LC2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PREM_LC2' 
    }
    ,
   FCR_ORG_RETRO_PREM_LC3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCR_ORG_RETRO_PREM_LC3' 
    }
    ,
   FCR_REC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCR_REC_TYPE' 
    }
    ,
   FCR_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCR_FLEX_01' 
    }
    ,
   FCR_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCR_FLEX_02' 
    }
    ,
   FCR_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCR_FLEX_03' 
    }
    ,
   FCR_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCR_FLEX_04' 
    }
    ,
   FCR_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCR_FLEX_05' 
    }
    ,
   FCR_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCR_CR_UID' 
    }
    ,
   FCR_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FCR_CR_DT' 
    }
    ,
   FCR_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FCR_UPD_UID' 
    }
    ,
   FCR_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FCR_UPD_DT' 
    }
    ,
   FCR_ORG_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'FCR_ORG_SHARE_PERC' 
    }
    ,
   FCR_FPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FCR_FPH_SYS_ID' 
    }
    ,
   FCR_REV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FCR_REV_YN' 
    }
    ,
   FCR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'FCR_SYS_ID' 
    }
    ,
   FCR_FPS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FCR_FPS_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_FAC_CUST_RETRO',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitFacCustRetro;
};