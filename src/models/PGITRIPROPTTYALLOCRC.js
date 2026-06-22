module.exports = (sequelize, DataTypes) => {
  const PGITRIPROPTTYALLOCRC = sequelize.define('PGITRIPROPTTYALLOCRC', {
       RPTAR_OVR_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_OVR_SPL_RETN_PREM_FC' 
    }
    ,
   RPTAR_OVR_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_OVR_SPL_RETN_PREM_LC_1' 
    }
    ,
   RPTAR_OVR_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_OVR_SPL_RETN_PREM_LC_2' 
    }
    ,
   RPTAR_OVR_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_OVR_SPL_RETN_PREM_LC_3' 
    }
    ,
   RPTAR_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAR_FLEX_01' 
    }
    ,
   RPTAR_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAR_FLEX_02' 
    }
    ,
   RPTAR_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAR_FLEX_03' 
    }
    ,
   RPTAR_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAR_FLEX_04' 
    }
    ,
   RPTAR_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTAR_FLEX_05' 
    }
    ,
   RPTAR_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTAR_CR_UID' 
    }
    ,
   RPTAR_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPTAR_CR_DT' 
    }
    ,
   RPTAR_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTAR_UPD_UID' 
    }
    ,
   RPTAR_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPTAR_UPD_DT' 
    }
    ,
   RPTAR_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTAR_ALLOC_IDX' 
    }
    ,
   RPTAR_ALLOC_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTAR_ALLOC_SR_NO' 
    }
    ,
   RPTAR_ALLOC_APPR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTAR_ALLOC_APPR_YN' 
    }
    ,
   RPTAR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'RPTAR_SYS_ID' 
    }
    ,
   RPTAR_RPTA_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTAR_RPTA_SYS_ID' 
    }
    ,
   RPTAR_RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTAR_RI_SYS_ID' 
    }
    ,
   RPTAR_RISK_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTAR_RISK_CLASS_CODE' 
    }
    ,
   RPTAR_TTY_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SI_FC' 
    }
    ,
   RPTAR_TTY_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SI_LC_1' 
    }
    ,
   RPTAR_TTY_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SI_LC_2' 
    }
    ,
   RPTAR_TTY_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SI_LC_3' 
    }
    ,
   RPTAR_TTY_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PML_FC' 
    }
    ,
   RPTAR_TTY_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PML_LC_1' 
    }
    ,
   RPTAR_TTY_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PML_LC_2' 
    }
    ,
   RPTAR_TTY_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PML_LC_3' 
    }
    ,
   RPTAR_TTY_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PREM_FC' 
    }
    ,
   RPTAR_TTY_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PREM_LC_1' 
    }
    ,
   RPTAR_TTY_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PREM_LC_2' 
    }
    ,
   RPTAR_TTY_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PREM_LC_3' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_SI_FC' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_SI_LC_1' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_SI_LC_2' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_SI_LC_3' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PML_FC' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PML_LC_1' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PML_LC_2' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PML_LC_3' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PREM_FC' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PREM_LC_1' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PREM_LC_2' 
    }
    ,
   RPTAR_TTY_ADDL_CESS_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_ADDL_CESS_PREM_LC_3' 
    }
    ,
   RPTAR_TTY_SI_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SI_BALANCE_FC' 
    }
    ,
   RPTAR_TTY_PML_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PML_BALANCE_FC' 
    }
    ,
   RPTAR_TTY_PREM_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_PREM_BALANCE_FC' 
    }
    ,
   RPTAR_TTY_SPL_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_SI_FC' 
    }
    ,
   RPTAR_TTY_SPL_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_SI_LC_1' 
    }
    ,
   RPTAR_TTY_SPL_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_SI_LC_2' 
    }
    ,
   RPTAR_TTY_SPL_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_SI_LC_3' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PML_FC' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PML_LC_1' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PML_LC_2' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PML_LC_3' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PREM_FC' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PREM_LC_1' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PREM_LC_2' 
    }
    ,
   RPTAR_TTY_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTAR_TTY_SPL_RETN_PREM_LC_3' 
    }
    
    }, {
        tableName: 'PGIT_RI_PROP_TTY_ALLOC_RC',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITRIPROPTTYALLOCRC;
};