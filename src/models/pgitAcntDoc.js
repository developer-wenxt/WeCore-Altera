module.exports = (sequelize, DataTypes) => {
  const PgitAcntDoc = sequelize.define('PgitAcntDoc', {
       AD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'AD_SYS_ID' 
    }
    ,
   AD_TRAN_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_TRAN_SYS_ID' 
    }
    ,
   AD_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_POL_SYS_ID' 
    }
    ,
   AD_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_END_NO_IDX' 
    }
    ,
   AD_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_END_SR_NO' 
    }
    ,
   AD_PROV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_PROV_YN' 
    }
    ,
   AD_BULK_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_BULK_YN' 
    }
    ,
   AD_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_POL_NO' 
    }
    ,
   AD_END_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_END_NO' 
    }
    ,
   AD_CLM_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CLM_SYS_ID' 
    }
    ,
   AD_CLM_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_CLM_NO' 
    }
    ,
   AD_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CUST_CODE' 
    }
    ,
   AD_CUST_CONS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CUST_CONS_CODE' 
    }
    ,
   AD_DOC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DOC_TYPE' 
    }
    ,
   AD_TRAN_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TRAN_TYPE' 
    }
    ,
   AD_TRAN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TRAN_CODE' 
    }
    ,
   AD_ACNT_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_ACNT_YEAR' 
    }
    ,
   AD_DOC_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'AD_DOC_NO' 
    }
    ,
   AD_DOC_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'AD_DOC_DT' 
    }
    ,
   AD_CAL_MONTH: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CAL_MONTH' 
    }
    ,
   AD_CAL_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CAL_YEAR' 
    }
    ,
   AD_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_SR_NO' 
    }
    ,
   AD_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_COMP_CODE' 
    }
    ,
   AD_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DIVN_CODE' 
    }
    ,
   AD_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DEPT_CODE' 
    }
    ,
   AD_INT_ENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_INT_ENT_YN' 
    }
    ,
   AD_DRCR_FLAG: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DRCR_FLAG' 
    }
    ,
   AD_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CURR_CODE' 
    }
    ,
   AD_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_FC' 
    }
    ,
   AD_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_LC_1' 
    }
    ,
   AD_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_LC_2' 
    }
    ,
   AD_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_LC_3' 
    }
    ,
   AD_PD_SYS_ID: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_PD_SYS_ID' 
    }
    ,
   AD_NARRATION: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_NARRATION' 
    }
    ,
   AD_NARRATION_BL: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_NARRATION_BL' 
    }
    ,
   AD_REMARKS: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_REMARKS' 
    }
    ,
   AD_REMARKS_BL: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_REMARKS_BL' 
    }
    ,
   AD_PRINT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_PRINT_YN' 
    }
    ,
   AD_POST_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_POST_YN' 
    }
    ,
   AD_LOT_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_LOT_NO' 
    }
    ,
   AD_MAIN_ACNT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_MAIN_ACNT_CODE' 
    }
    ,
   AD_SUB_ACNT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_SUB_ACNT_CODE' 
    }
    ,
   AD_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_CR_UID' 
    }
    ,
   AD_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'AD_CR_DT' 
    }
    ,
   AD_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_UPD_UID' 
    }
    ,
   AD_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'AD_UPD_DT' 
    }
    ,
   AD_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_01' 
    }
    ,
   AD_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_02' 
    }
    ,
   AD_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_03' 
    }
    ,
   AD_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_04' 
    }
    ,
   AD_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_05' 
    }
    ,
   AD_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_06' 
    }
    ,
   AD_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_07' 
    }
    ,
   AD_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_08' 
    }
    ,
   AD_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_09' 
    }
    ,
   AD_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_10' 
    }
    ,
   AD_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_11' 
    }
    ,
   AD_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_12' 
    }
    ,
   AD_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_13' 
    }
    ,
   AD_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_14' 
    }
    ,
   AD_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_15' 
    }
    ,
   AD_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DS_TYPE' 
    }
    ,
   AD_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_PROD_CODE' 
    }
    ,
   AD_ANLY_CODE_1: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ANLY_CODE_1' 
    }
    ,
   AD_ANLY_CODE_2: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ANLY_CODE_2' 
    }
    ,
   AD_ACTY_CODE_1: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ACTY_CODE_1' 
    }
    ,
   AD_ACTY_CODE_2: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ACTY_CODE_2' 
    }
    ,
   AD_ASSR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ASSR_CODE' 
    }
    ,
   AD_ASSR_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_ASSR_NAME' 
    }
    ,
   AD_TXN_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TXN_COMP_CODE' 
    }
    ,
   AD_TXN_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TXN_DIVN_CODE' 
    }
    ,
   AD_TXN_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TXN_DEPT_CODE' 
    }
    ,
   AD_PI_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_PI_REF_NO' 
    }
    ,
   AD_PCL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCL_SYS_ID' 
    }
    ,
   AD_INSTR_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_INSTR_TYPE' 
    }
    ,
   AD_PCDTL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCDTL_SYS_ID' 
    }
    ,
   AD_PCI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCI_SYS_ID' 
    }
    ,
   AD_CLM_TXN_IND: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CLM_TXN_IND' 
    }
    ,
   AD_CLM_REF_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CLM_REF_SYS_ID' 
    }
    ,
   AD_POST_REF_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_POST_REF_NO' 
    }
    ,
   AD_DUMMY_DOC_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_DUMMY_DOC_NO' 
    }
    ,
   AD_PLACE_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_PLACE_NO' 
    }
    ,
   AD_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PLACE_IDX' 
    }
    ,
   AD_TTY_ACNT_PROC_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_TTY_ACNT_PROC_ID' 
    }
    ,
   AD_RTAPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_RTAPH_SYS_ID' 
    }
    ,
   AD_COD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_COD_SYS_ID' 
    }
    ,
   AD_PCBP_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCBP_SYS_ID' 
    }
    ,
   AD_UPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_UPH_SYS_ID' 
    }
    ,
   AD_UPD_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_UPD_TYPE' 
    }
    ,
   AD_URRH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_URRH_SYS_ID' 
    }
    ,
   AD_URRD_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_URRD_TYPE' 
    }
    ,
   AD_IBNRH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_IBNRH_SYS_ID' 
    }
    ,
   AD_IBNRD_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_IBNRD_TYPE' 
    }
    ,
   AD_TTY_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_TTY_CODE' 
    }
    ,
   AD_TTY_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_TYPE' 
    }
    ,
   AD_RI_PERIOD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_RI_PERIOD_CODE' 
    }
    ,
   AD_REVENUE_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_REVENUE_TYPE' 
    }
    ,
   AD_TTY_TYPE_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_TYPE_CODE' 
    }
    ,
   AD_UW_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_UW_YEAR' 
    }
    ,
   AD_TTY_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_TTY_YEAR' 
    }
    ,
   AD_CEDING_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CEDING_BASIS' 
    }
    ,
   AD_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'AD_SHARE_PERC' 
    }
    ,
   AD_PERIL_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_PERIL_CLASS_CODE' 
    }
    ,
   AD_RI_CUST_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_RI_CUST_NAME' 
    }
    ,
   AD_BRK_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_BRK_CODE' 
    }
    ,
   AD_TTY_ACNT_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_ACNT_TYPE' 
    }
    ,
   AD_TTY_TRAN_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_TRAN_TYPE' 
    }
    ,
   AD_LAYER_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_LAYER_CODE' 
    }
    ,
   AD_RI_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_RI_CUST_CODE' 
    }
    ,
   AD_FLEX_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_16' 
    }
    ,
   AD_FLEX_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_17' 
    }
    ,
   AD_FLEX_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_18' 
    }
    ,
   AD_FLEX_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_19' 
    }
    ,
   AD_FLEX_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_20' 
    }
    ,
   AD_DUE_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'AD_DUE_DT' 
    }
    ,
   AD_COH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_COH_SYS_ID' 
    }
    ,
   AD_CIHD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CIHD_SYS_ID' 
    }
    ,
   AD_RCI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_RCI_SYS_ID' 
    }
    ,
   AD_SPD_SPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_SPD_SPH_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_ACNT_DOC',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitAcntDoc;
};