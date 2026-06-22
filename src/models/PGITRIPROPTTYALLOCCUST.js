module.exports = (sequelize, DataTypes) => {
  const PGITRIPROPTTYALLOCCUST = sequelize.define('PGITRIPROPTTYALLOCCUST', {
       RPTAC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'RPTAC_SYS_ID' 
    }
    ,
   RPTAC_RPTA_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTAC_RPTA_SYS_ID' 
    }
    ,
   RPTAC_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTAC_CUST_CODE' 
    }
    ,
   RPTAC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_SI_FC' 
    }
    ,
   RPTAC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_SI_LC_1' 
    }
    ,
   RPTAC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_SI_LC_2' 
    }
    ,
   RPTAC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_SI_LC_3' 
    }
    ,
   RPTAC_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PML_FC' 
    }
    ,
   RPTAC_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PML_LC_1' 
    }
    ,
   RPTAC_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PML_LC_2' 
    }
    ,
   RPTAC_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PML_LC_3' 
    }
    ,
   RPTAC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PREM_FC' 
    }
    ,
   RPTAC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PREM_LC_1' 
    }
    ,
   RPTAC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PREM_LC_2' 
    }
    ,
   RPTAC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAC_PREM_LC_3' 
    }
    ,
   RPTAC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAC_FLEX_01' 
    }
    ,
   RPTAC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAC_FLEX_02' 
    }
    ,
   RPTAC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAC_FLEX_03' 
    }
    ,
   RPTAC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAC_FLEX_04' 
    }
    ,
   RPTAC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAC_FLEX_05' 
    }
    ,
   RPTAC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTAC_CR_UID' 
    }
    ,
   RPTAC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPTAC_CR_DT' 
    }
    ,
   RPTAC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTAC_UPD_UID' 
    }
    ,
   RPTAC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPTAC_UPD_DT' 
    }
    ,
   RPTAC_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'RPTAC_SHARE_PERC' 
    }
    ,
   RPTAC_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTAC_ALLOC_IDX' 
    }
    ,
   RPTAC_ALLOC_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTAC_ALLOC_SR_NO' 
    }
    ,
   RPTAC_ALLOC_APPR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTAC_ALLOC_APPR_YN' 
    }
    ,
   RPTAC_RPTAR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTAC_RPTAR_SYS_ID' 
    }
    ,
   RPTAC_BRK_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTAC_BRK_CODE' 
    }
    
    }, {
        tableName: 'PGIT_RI_PROP_TTY_ALLOC_CUST',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITRIPROPTTYALLOCCUST;
};