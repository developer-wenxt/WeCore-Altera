const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const path = require('path');
const oracledb = require('oracledb'); // Important for Oracle support

try {
  // Use path.dirname(process.execPath) to find the folder relative to the executable
  // In dev (node server.js), process.execPath is the node binary, so we fallback to __dirname
  const isSEA = process.execPath.endsWith('wecore-altera.exe') || process.execPath.endsWith('wecore-altera');
  
  const libPath = isSEA
    ? path.join(path.dirname(process.execPath), 'instantclient_19_22') 
    : path.join(__dirname, '../../instantclient_19_22');
    
  oracledb.initOracleClient({ libDir: libPath });
} catch (err) {
  console.error('Whoops, failed to initialize Oracle Thick mode:', err);
}

const sequelize = new Sequelize(
  process.env.DB_NAME, // Service name for Oracle
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 1521, // Default Oracle port
    dialect: 'oracle', // Changed from 'mysql'
    logging: false,
    dialectOptions: {
      connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE_NAME}`,
      // Additional Oracle-specific options if needed
    },
  }
);

const db = {};

// Statically load all models for SEA compatibility
const models = [
  require('./GET_EXCH_RATE.js'),
  require('./PGIMLOVDEFN.js'),
  require('./PGITPOLDEDUCTIBLE.js'),
  require('./PGITPOLHYPOTHECATION.js'),
  require('./PGITPOLINSTCHARGE.js'),
  require('./PGITPOLPREVINSDTL.js'),
  require('./PGITPOLRISKADDLINFO.js'),
  require('./PGITPOLRISKSMI.js'),
  require('./PGITRIINTERFACE.js'),
  require('./PGITRIPROPTTYALLOC.js'),
  require('./PGITRIPROPTTYALLOCCUST.js'),
  require('./PGITRIPROPTTYALLOCRC.js'),
  require('./PGITRIPROPTTYDTLPG.js'),
  require('./PGIT_POL_PREM_DTL.js'),
  require('./POL_APPR_VAL.js'),
  require('./PR_DFLT_CURRENCY.js'),
  require('./PR_FPRD_FPPD_CALC.js'),
  require('./P_CALC_PREMIUM.js'),
  require('./PrFacCustCalc.js'),
  require('./Pr_Generate_Doc_Number.js'),
  require('./approveBtn.js'),
  require('./dynamicDropdown.js'),
  require('./pcomAppParameter.js'),
  require('./pcomCodes.js'),
  require('./pgitAcntDoc.js'),
  require('./pgitFacCommTax.js'),
  require('./pgitFacCust.js'),
  require('./pgitFacCustRetro.js'),
  require('./pgitFacOut.js'),
  require('./pgitFacPlacePcDtl.js'),
  require('./pgitFacPlaceRiskDtl.js'),
  require('./pgitFacPlaceShare.js'),
  require('./pgitPolApplCurr.js'),
  require('./pgitPolBroker.js'),
  require('./pgitPolCharge.js'),
  require('./pgitPolCoinComm.js'),
  require('./pgitPolCoinPartCust.js'),
  require('./pgitPolCondition.js'),
  require('./pgitPolInstPrem.js'),
  require('./pgitPolInward.js'),
  require('./pgitPolPremCompSheet.js'),
  require('./pgitPolRiskCover.js'),
  require('./pgitPolSchedule.js'),
  require('./pgitPolSection.js'),
  require('./pgitPolicy.js'),
  require('./pgitRiPolRiskDtl.js'),
  require('./pgitTaxDtl.js'),
  require('./pgithPolApplCurr.js'),
  require('./pgithPolBroker.js'),
  require('./pgithPolCharge.js'),
  require('./pgithPolCondition.js'),
  require('./pgithPolDeductible.js'),
  require('./pgithPolHypothecation.js'),
  require('./pgithPolInstPrem.js'),
  require('./pgithPolPrevInsDtl.js'),
  require('./pgithPolRiskAddlInfo.js'),
  require('./pgithPolRiskCover.js'),
  require('./pgithPolRiskSmi.js'),
  require('./pgithPolSection.js'),
  require('./pgithPolicy.js'),
  require('./prCalcFacCommTax.js'),
  require('./prCalcFacCustPremTax.js'),
  require('./prCalcRetroCustPremTax.js'),
  require('./prFacCommCalc.js'),
  require('./prFacRetroCalc.js')
];

models.forEach(modelFn => {
  if (typeof modelFn === 'function') {
    const model = modelFn(sequelize, DataTypes);
    db[model.name] = model;
  }
});

// Run associations (same as before)
Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.QueryTypes = QueryTypes; 

module.exports = db;