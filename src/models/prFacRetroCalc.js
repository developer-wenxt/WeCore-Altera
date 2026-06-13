module.exports = (sequelize, DataTypes) => {
  const FPSRETROPLACEMENT = sequelize.define('FPSRETROPLACEMENT', {

    p_fps_sys_id: {
      type: DataTypes.DECIMAL(20, 0),
      allowNull: true,
      field: 'P_FPS_SYS_ID'
    },

    p_fc_sys_id: {
      type: DataTypes.DECIMAL(20, 0),
      allowNull: true,
      field: 'P_FC_SYS_ID'
    },

    p_retro_perc: {
      type: DataTypes.DECIMAL(10, 5),
      allowNull: true,
      field: 'P_RETRO_PERC'
    },

    p_place_si_fc: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_SI_FC'
    },

    p_place_si_lc_1: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_SI_LC_1'
    },

    p_place_si_lc_2: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_SI_LC_2'
    },

    p_place_si_lc_3: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_SI_LC_3'
    },

    p_place_pml_fc: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PML_FC'
    },

    p_place_pml_lc_1: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PML_LC_1'
    },

    p_place_pml_lc_2: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PML_LC_2'
    },

    p_place_pml_lc_3: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PML_LC_3'
    },

    p_place_prem_fc: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PREM_FC'
    },

    p_place_prem_lc_1: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PREM_LC_1'
    },

    p_place_prem_lc_2: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PREM_LC_2'
    },

    p_place_prem_lc_3: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_PLACE_PREM_LC_3'
    },

    p_net_prem_fc: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_NET_PREM_FC'
    },

    p_net_prem_lc_1: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_NET_PREM_LC_1'
    },

    p_net_prem_lc_2: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_NET_PREM_LC_2'
    },

    p_net_prem_lc_3: {
      type: DataTypes.DECIMAL(20, 3),
      allowNull: true,
      field: 'P_NET_PREM_LC_3'
    }

  }, {
    tableName: 'FPS_RETRO_PLACEMENT', // change if needed
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  });

  return FPSRETROPLACEMENT;
};