module.exports = (sequelize, DataTypes) => {
  const PgitFacCommTax = sequelize.define('PgitFacCommTax', {
       FCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'FCT_SYS_ID' 
    }
    ,
   FCT_FPS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FCT_FPS_SYS_ID' 
    }
    ,
   FCT_FCR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FCT_FCR_SYS_ID' 
    }
    ,
   FCT_FPS_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FCT_FPS_PLACE_IDX' 
    }
    ,
   FCT_FC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FCT_FC_SYS_ID' 
    }
    ,
   FCT_FAC_RETRO_FLAG: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'FCT_FAC_RETRO_FLAG' 
    }
    ,
   FCT_CT_FLAG: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_CT_FLAG' 
    }
    ,
   FCT_FAC_CT_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_FAC_CT_TYPE' 
    }
    ,
   FCT_FAC_CT_CALC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_FAC_CT_CALC_TYPE' 
    }
    ,
   FCT_COMM_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_COMM_CODE' 
    }
    ,
   FCT_COMM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'FCT_COMM_PERC' 
    }
    ,
   FCT_FPS_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_FPS_CURR_CODE' 
    }
    ,
   FCT_COMM_ON: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_COMM_ON' 
    }
    ,
   FCT_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_COMM_FC' 
    }
    ,
   FCT_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_COMM_LC_1' 
    }
    ,
   FCT_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_COMM_LC_2' 
    }
    ,
   FCT_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_COMM_LC_3' 
    }
    ,
   FCT_ORG_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_ORG_COMM_FC' 
    }
    ,
   FCT_ORG_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_ORG_COMM_LC_1' 
    }
    ,
   FCT_ORG_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_ORG_COMM_LC_2' 
    }
    ,
   FCT_ORG_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FCT_ORG_COMM_LC_3' 
    }
    ,
   FCT_REC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_REC_TYPE' 
    }
    ,
   FCT_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCT_FLEX_01' 
    }
    ,
   FCT_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCT_FLEX_02' 
    }
    ,
   FCT_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCT_FLEX_03' 
    }
    ,
   FCT_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCT_FLEX_04' 
    }
    ,
   FCT_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FCT_FLEX_05' 
    }
    ,
   FCT_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FCT_CR_UID' 
    }
    ,
   FCT_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FCT_CR_DT' 
    }
    ,
   FCT_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FCT_UPD_UID' 
    }
    ,
   FCT_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FCT_UPD_DT' 
    }
    ,
   FCT_ORG_COMM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'FCT_ORG_COMM_PERC' 
    }
    ,
   FCT_FPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FCT_FPH_SYS_ID' 
    }
    ,
   FCT_REV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FCT_REV_YN' 
    }
    
    }, {
        tableName: 'PGIT_FAC_COMM_TAX',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitFacCommTax;
};