const fs = require('fs');
const path = require('path');
const oracledb = require('oracledb');

let isInitialized = false;

function initOracle() {
  if (isInitialized) {
    return;
  }

  if (typeof oracledb.isThinMode === 'function' && !oracledb.isThinMode()) {
    isInitialized = true;
    return;
  }

  try {
    if (process.env.ORACLE_CLIENT_DIR && fs.existsSync(process.env.ORACLE_CLIENT_DIR)) {
      oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_DIR });
    } else if (process.platform === 'linux' && process.env.LD_LIBRARY_PATH) {
      oracledb.initOracleClient();
    } else {
      const localClientDir = path.resolve(__dirname, '../../instantclient_19_22');
      if (fs.existsSync(localClientDir)) {
        oracledb.initOracleClient({ libDir: localClientDir });
      } else {
        oracledb.initOracleClient();
      }
    }
    isInitialized = true;
  } catch (err) {
    if (err.code === 'NJS-090' || err.code === 'NJS-009' || (err.message && err.message.includes('already called'))) {
      isInitialized = true;
    } else {
      console.warn('Warning/Error initializing Oracle Client (Thick mode):', err.message || err);
    }
  }
}

module.exports = initOracle;
