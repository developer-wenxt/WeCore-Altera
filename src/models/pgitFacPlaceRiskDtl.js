module.exports = (sequelize, DataTypes) => {
  const PgitFacPlaceRiskDtl = sequelize.define('PgitFacPlaceRiskDtl', {
       FPRD_ORG_PLACE_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PML_FC' 
    }
    ,
   FPRD_ORG_PLACE_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PML_LC_1' 
    }
    ,
   FPRD_ORG_PLACE_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PML_LC_2' 
    }
    ,
   FPRD_ORG_PLACE_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PML_LC_3' 
    }
    ,
   FPRD_ORG_PLACE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PREM_FC' 
    }
    ,
   FPRD_ORG_PLACE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PREM_LC_1' 
    }
    ,
   FPRD_ORG_PLACE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PREM_LC_2' 
    }
    ,
   FPRD_ORG_PLACE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_PREM_LC_3' 
    }
    ,
   FPRD_ORG_FAC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_FAC_PREM_FC' 
    }
    ,
   FPRD_ORG_FAC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_FAC_PREM_LC_1' 
    }
    ,
   FPRD_ORG_FAC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_FAC_PREM_LC_2' 
    }
    ,
   FPRD_ORG_FAC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_FAC_PREM_LC_3' 
    }
    ,
   FPRD_ORG_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'FPRD_ORG_SHARE_PERC' 
    }
    ,
   FPRD_REC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPRD_REC_TYPE' 
    }
    ,
   FPRD_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPRD_FLEX_01' 
    }
    ,
   FPRD_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPRD_FLEX_02' 
    }
    ,
   FPRD_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPRD_FLEX_03' 
    }
    ,
   FPRD_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPRD_FLEX_04' 
    }
    ,
   FPRD_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPRD_FLEX_05' 
    }
    ,
   FPRD_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPRD_CR_UID' 
    }
    ,
   FPRD_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FPRD_CR_DT' 
    }
    ,
   FPRD_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPRD_UPD_UID' 
    }
    ,
   FPRD_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FPRD_UPD_DT' 
    }
    ,
   FPRD_REV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FPRD_REV_YN' 
    }
    ,
   FPRD_SYS_IpgitFacPlaceRiskDtl: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'FPRD_SYS_ID' 
    }
    ,
   FPRD_FPS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPRD_FPS_SYS_ID' 
    }
    ,
   FPRD_FPS_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPRD_FPS_PLACE_IDX' 
    }
    ,
   FPRD_FPPD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FPRD_FPPD_SYS_ID' 
    }
    ,
   FPRD_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPRD_PRAI_SYS_ID' 
    }
    ,
   FPRD_PC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPRD_PC_CODE' 
    }
    ,
   FPRD_RPRD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPRD_RPRD_SYS_ID' 
    }
    ,
   FPRD_FPS_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPRD_FPS_CURR_CODE' 
    }
    ,
   FPRD_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'FPRD_SHARE_PERC' 
    }
    ,
   FPRD_PLACE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_SI_FC' 
    }
    ,
   FPRD_PLACE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_SI_LC_1' 
    }
    ,
   FPRD_PLACE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_SI_LC_2' 
    }
    ,
   FPRD_PLACE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_SI_LC_3' 
    }
    ,
   FPRD_PLACE_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PML_FC' 
    }
    ,
   FPRD_PLACE_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PML_LC_1' 
    }
    ,
   FPRD_PLACE_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PML_LC_2' 
    }
    ,
   FPRD_PLACE_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PML_LC_3' 
    }
    ,
   FPRD_AVG_RATE: { 
      type: DataTypes.DECIMAL(10, 7), 
      allowNull: false, 
      
      field: 'FPRD_AVG_RATE' 
    }
    ,
   FPRD_PLACE_RATE: { 
      type: DataTypes.DECIMAL(10, 7), 
      allowNull: false, 
      
      field: 'FPRD_PLACE_RATE' 
    }
    ,
   FPRD_PLACE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PREM_FC' 
    }
    ,
   FPRD_PLACE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PREM_LC_1' 
    }
    ,
   FPRD_PLACE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PREM_LC_2' 
    }
    ,
   FPRD_PLACE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_PLACE_PREM_LC_3' 
    }
    ,
   FPRD_FAC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_FAC_PREM_FC' 
    }
    ,
   FPRD_FAC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_FAC_PREM_LC_1' 
    }
    ,
   FPRD_FAC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_FAC_PREM_LC_2' 
    }
    ,
   FPRD_FAC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_FAC_PREM_LC_3' 
    }
    ,
   FPRD_ORG_PLACE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_SI_FC' 
    }
    ,
   FPRD_ORG_PLACE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_SI_LC_1' 
    }
    ,
   FPRD_ORG_PLACE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_SI_LC_2' 
    }
    ,
   FPRD_ORG_PLACE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPRD_ORG_PLACE_SI_LC_3' 
    }
    
    }, {
        tableName: 'PGIT_FAC_PLACE_RISK_DTL',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitFacPlaceRiskDtl;
};