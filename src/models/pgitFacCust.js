module.exports = (sequelize, DataTypes) => {
  const PgitFacCust = sequelize.define('PgitFacCust', {
       FC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SI_FC' 
    }
    ,
   FC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SI_LC_1' 
    }
    ,
   FC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SI_LC_2' 
    }
    ,
   FC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SI_LC_3' 
    }
    ,
   FC_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PML_FC' 
    }
    ,
   FC_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PML_LC_1' 
    }
    ,
   FC_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PML_LC_2' 
    }
    ,
   FC_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PML_LC_3' 
    }
    ,
   FC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PREM_FC' 
    }
    ,
   FC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PREM_LC_1' 
    }
    ,
   FC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PREM_LC_2' 
    }
    ,
   FC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_PREM_LC_3' 
    }
    ,
   FC_OVR_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_OVR_PREM_FC' 
    }
    ,
   FC_OVR_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_OVR_PREM_LC_1' 
    }
    ,
   FC_OVR_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_OVR_PREM_LC_2' 
    }
    ,
   FC_OVR_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_OVR_PREM_LC_3' 
    }
    ,
   FC_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_SI_FC' 
    }
    ,
   FC_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_SI_LC_1' 
    }
    ,
   FC_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_SI_LC_2' 
    }
    ,
   FC_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_SI_LC_3' 
    }
    ,
   FC_ORG_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PML_FC' 
    }
    ,
   FC_ORG_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PML_LC_1' 
    }
    ,
   FC_ORG_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PML_LC_2' 
    }
    ,
   FC_ORG_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PML_LC_3' 
    }
    ,
   FC_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PREM_FC' 
    }
    ,
   FC_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PREM_LC_1' 
    }
    ,
   FC_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PREM_LC_2' 
    }
    ,
   FC_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_PREM_LC_3' 
    }
    ,
   FC_WITHDRAW_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FC_WITHDRAW_YN' 
    }
    ,
   FC_WITHDRAW_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FC_WITHDRAW_DT' 
    }
    ,
   FC_WITHDRAW_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FC_WITHDRAW_UID' 
    }
    ,
   FC_REC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FC_REC_TYPE' 
    }
    ,
   FC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FC_FLEX_01' 
    }
    ,
   FC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FC_FLEX_02' 
    }
    ,
   FC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FC_FLEX_03' 
    }
    ,
   FC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FC_FLEX_04' 
    }
    ,
   FC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FC_FLEX_05' 
    }
    ,
   FC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FC_CR_UID' 
    }
    ,
   FC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FC_CR_DT' 
    }
    ,
   FC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FC_UPD_UID' 
    }
    ,
   FC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FC_UPD_DT' 
    }
    ,
   FC_RETRO_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FC_RETRO_YN' 
    }
    ,
   FC_ORG_OVR_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_OVR_PREM_FC' 
    }
    ,
   FC_ORG_OVR_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_OVR_PREM_LC_1' 
    }
    ,
   FC_ORG_OVR_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_OVR_PREM_LC_2' 
    }
    ,
   FC_ORG_OVR_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_OVR_PREM_LC_3' 
    }
    ,
   FC_NET_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_NET_PREM_FC' 
    }
    ,
   FC_NET_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_NET_PREM_LC_1' 
    }
    ,
   FC_NET_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_NET_PREM_LC_2' 
    }
    ,
   FC_NET_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_NET_PREM_LC_3' 
    }
    ,
   FC_ORG_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'FC_ORG_SHARE_PERC' 
    }
    ,
   FC_ORG_NET_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_NET_PREM_FC' 
    }
    ,
   FC_ORG_NET_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_NET_PREM_LC_1' 
    }
    ,
   FC_ORG_NET_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_NET_PREM_LC_2' 
    }
    ,
   FC_ORG_NET_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_ORG_NET_PREM_LC_3' 
    }
    ,
   FC_DEDUCTIBLES_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_DEDUCTIBLES_FC' 
    }
    ,
   FC_DEDUCTIBLES_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_DEDUCTIBLES_LC_1' 
    }
    ,
   FC_DEDUCTIBLES_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_DEDUCTIBLES_LC_2' 
    }
    ,
   FC_DEDUCTIBLES_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_DEDUCTIBLES_LC_3' 
    }
    ,
   FC_FPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FC_FPH_SYS_ID' 
    }
    ,
   FC_RETRO_CUST_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FC_RETRO_CUST_YN' 
    }
    ,
   FC_RETRO_IMMED_CEDING_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FC_RETRO_IMMED_CEDING_YN' 
    }
    ,
   FC_FPS_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FC_FPS_PREM_CURR_CODE' 
    }
    ,
   FC_CESSION_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'FC_CESSION_NO' 
    }
    ,
   FC_REV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FC_REV_YN' 
    }
    ,
   FC_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SPL_RETN_PREM_FC' 
    }
    ,
   FC_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SPL_RETN_PREM_LC_1' 
    }
    ,
   FC_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SPL_RETN_PREM_LC_2' 
    }
    ,
   FC_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FC_SPL_RETN_PREM_LC_3' 
    }
    ,
   FC_WARR_DAYS: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FC_WARR_DAYS' 
    }
    ,
   FC_WARR_YN: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FC_WARR_YN' 
    }
    ,
   FC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'FC_SYS_ID' 
    }
    ,
   FC_FPS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FC_FPS_SYS_ID' 
    }
    ,
   FC_FPS_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FC_FPS_PLACE_IDX' 
    }
    ,
   FC_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FC_CUST_CODE' 
    }
    ,
   FC_SHARE_PERC: { 
      type: DataTypes.DECIMAL(15, 12), 
      allowNull: false, 
      
      field: 'FC_SHARE_PERC' 
    }
    ,
   FC_LEADER_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FC_LEADER_YN' 
    }
    ,
   FC_FPS_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FC_FPS_CURR_CODE' 
    }
    ,
   FC_BRK_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FC_BRK_CODE' 
    }
    ,
   FC_INTER_BRK_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FC_INTER_BRK_CODE' 
    }
    
    }, {
        tableName: 'PGIT_FAC_CUST',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitFacCust;
};