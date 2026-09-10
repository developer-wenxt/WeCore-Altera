const { sequelize, QueryTypes } = require('../models');

exports.get = async (endType, PLD_PROG_CODE, PLD_BLOCK_NAME) => {
  const query = `select EBS_SYS_ID,EBS_END_TYPE ,EBS_PROGRAM_ID,EBS_BLOCK_NAME,EBS_INSERT_ALLOWED_YN,EBS_DELETE_ALLOWED_YN,EBS_UPDATE_ALLOWED_YN,EFS_FIELD_NAME,EFS_UPDATE_ALLOWED_YN
from pgim_end_block_setup ,pgim_end_field_setup where ebs_end_type=:endType and ebs_program_id=:PLD_PROG_CODE and
 EBS_BLOCK_NAME =:PLD_BLOCK_NAME and efs_ebs_sys_id=ebs_sys_id`;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: {
      endType, PLD_PROG_CODE, PLD_BLOCK_NAME
    }
  });
  if (!records || records.length === 0) {
    return null;
  }

  const screenProperties = {
    EBS_INSERT_ALLOWED_YN: records[0].EBS_INSERT_ALLOWED_YN,
    EBS_DELETE_ALLOWED_YN: records[0].EBS_DELETE_ALLOWED_YN,
    EBS_UPDATE_ALLOWED_YN: records[0].EBS_UPDATE_ALLOWED_YN,
    EBS_SYS_ID: records[0].EBS_SYS_ID,
    EBS_END_TYPE: records[0].EBS_END_TYPE,
    EBS_PROGRAM_ID: records[0].EBS_PROGRAM_ID,
    EBS_BLOCK_NAME: records[0].EBS_BLOCK_NAME
  };

  const fieldProperties = records.map(record => ({
    EFS_FIELD_NAME: record.EFS_FIELD_NAME,
    EFS_UPDATE_ALLOWED_YN: record.EFS_UPDATE_ALLOWED_YN
  }));

  return {
    screenProperties,
    fieldProperties
  };
};

