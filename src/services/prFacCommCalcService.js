const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function calculatePrFacComm(
  fpsSysId = null,
  fcSysId = null,
  commCode = null,
  commPerc = null,
  commOn = null,
  commCalcType = null
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    await connection.execute(`BEGIN DBMS_OUTPUT.ENABLE(NULL); END;`);

    await connection.execute(
      `
      DECLARE
          M_COMM_FC       NUMBER;
          M_COMM_LC_1     NUMBER;
          M_COMM_LC_2     NUMBER;
          M_COMM_LC_3     NUMBER;
          M_NET_PREM_FC   NUMBER;
          M_NET_PREM_LC_1 NUMBER;
          M_NET_PREM_LC_2 NUMBER;
          M_NET_PREM_LC_3 NUMBER;
      BEGIN
          PR_FAC_COMM_CALC( 
              P_FPS_SYS_ID      => :pFpsSysId,
              P_FC_SYS_ID       => :pFcSysId,
              P_COMM_CODE       => :pCommCode,
              P_COMM_PERC       => :pCommPerc,
              P_COMM_ON         => :pCommOn,
              P_COMM_CALC_TYPE  => :pCommCalcType,
              P_COMM_FC         => M_COMM_FC,
              P_COMM_LC_1       => M_COMM_LC_1,
              P_COMM_LC_2       => M_COMM_LC_2,
              P_COMM_LC_3       => M_COMM_LC_3,
              P_NET_PREM_FC     => M_NET_PREM_FC,
              P_NET_PREM_LC_1   => M_NET_PREM_LC_1,
              P_NET_PREM_LC_2   => M_NET_PREM_LC_2,
              P_NET_PREM_LC_3   => M_NET_PREM_LC_3
          );
       
          DBMS_OUTPUT.PUT_LINE('M_COMM_FC: ' || M_COMM_FC);
          DBMS_OUTPUT.PUT_LINE('M_COMM_LC_1: ' || M_COMM_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_COMM_LC_2: ' || M_COMM_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_COMM_LC_3: ' || M_COMM_LC_3);
       
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_FC: ' || M_NET_PREM_FC);
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_LC_1: ' || M_NET_PREM_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_LC_2: ' || M_NET_PREM_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_LC_3: ' || M_NET_PREM_LC_3);
      END;
      `,
      {
        pFpsSysId:        { val: fpsSysId === null ? null : Number(fpsSysId),  type: oracledb.NUMBER },
        pFcSysId:         { val: fcSysId === null ? null : Number(fcSysId),   type: oracledb.NUMBER },
        pCommCode:        { val: commCode === null ? null : String(commCode), type: oracledb.STRING },
        pCommPerc:        { val: commPerc === null ? null : Number(commPerc), type: oracledb.NUMBER },
        pCommOn:          { val: commOn === null ? null : String(commOn),     type: oracledb.STRING }, 
        pCommCalcType:    { val: commCalcType === null ? null : String(commCalcType), type: oracledb.STRING }, 
      }
    );

    const outputLines = [];
    while (true) {
      const outputResult = await connection.execute(
        `
        DECLARE
            v_line   VARCHAR2(32767);
            v_status INTEGER;
        BEGIN
            DBMS_OUTPUT.GET_LINE(v_line, v_status);
            :line   := v_line;
            :status := v_status;
        END;
        `,
        {
          line: {
            dir:     oracledb.BIND_OUT,   
            type:    oracledb.STRING,
            maxSize: 32767,
          },
          status: {
            dir:  oracledb.BIND_OUT,
            type: oracledb.NUMBER,
          },
        }
      );

      if (outputResult.outBinds.status === 1) break;

      if (outputResult.outBinds.line !== null) {
        outputLines.push(outputResult.outBinds.line);
      }
    }

    const parsedData = {};
    for (const line of outputLines) {
      const match = line.match(/^([^:]+):\s*(.+)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        parsedData[key] = (isNaN(value) || value === '') ? null : Number(value);
      }
    }

    return parsedData;

  } catch (error) {
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = { calculatePrFacComm };
