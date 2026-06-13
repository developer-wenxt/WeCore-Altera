const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function calculatePrFacCust(
  fpsSysId = null,
  custCode = null,
  brkCode = null,
  custPerc = null,
  premOverriddenYn = 'N'
) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    await connection.execute(`BEGIN DBMS_OUTPUT.ENABLE(NULL); END;`);

    await connection.execute(
      `
      DECLARE
          M_PLACE_SI_FC       NUMBER;
          M_PLACE_SI_LC_1     NUMBER;
          M_PLACE_SI_LC_2     NUMBER;
          M_PLACE_SI_LC_3     NUMBER;
          M_PLACE_PML_FC      NUMBER;
          M_PLACE_PML_LC_1    NUMBER;
          M_PLACE_PML_LC_2    NUMBER;
          M_PLACE_PML_LC_3    NUMBER;
          M_PLACE_PREM_FC     NUMBER;
          M_PLACE_PREM_LC_1   NUMBER;
          M_PLACE_PREM_LC_2   NUMBER;
          M_PLACE_PREM_LC_3   NUMBER;
          M_OVR_PREM_FC       NUMBER;
          M_OVR_PREM_LC_1     NUMBER;
          M_OVR_PREM_LC_2     NUMBER;
          M_OVR_PREM_LC_3     NUMBER;
          M_NET_PREM_FC       NUMBER;
          M_NET_PREM_LC_1     NUMBER;
          M_NET_PREM_LC_2     NUMBER;
          M_NET_PREM_LC_3     NUMBER;
      BEGIN
          PR_FAC_CUST_CALC(
              P_FPS_SYS_ID        => :pFpsSysId,
              P_CUST_CODE         => :pCustCode,
              P_BRK_CODE          => :pBrkCode,
              P_CUST_PERC         => :pCustPerc,
              P_PLACE_SI_FC       => M_PLACE_SI_FC,
              P_PLACE_SI_LC_1     => M_PLACE_SI_LC_1,
              P_PLACE_SI_LC_2     => M_PLACE_SI_LC_2,
              P_PLACE_SI_LC_3     => M_PLACE_SI_LC_3,
              P_PLACE_PML_FC      => M_PLACE_PML_FC,
              P_PLACE_PML_LC_1    => M_PLACE_PML_LC_1,
              P_PLACE_PML_LC_2    => M_PLACE_PML_LC_2,
              P_PLACE_PML_LC_3    => M_PLACE_PML_LC_3,
              P_PLACE_PREM_FC     => M_PLACE_PREM_FC,
              P_PLACE_PREM_LC_1   => M_PLACE_PREM_LC_1,
              P_PLACE_PREM_LC_2   => M_PLACE_PREM_LC_2,
              P_PLACE_PREM_LC_3   => M_PLACE_PREM_LC_3,
              P_PREM_OVERRIDDEN_YN => :pPremOverriddenYn,
              P_OVR_PREM_FC       => M_OVR_PREM_FC,
              P_OVR_PREM_LC_1     => M_OVR_PREM_LC_1,
              P_OVR_PREM_LC_2     => M_OVR_PREM_LC_2,
              P_OVR_PREM_LC_3     => M_OVR_PREM_LC_3,
              P_NET_PREM_FC       => M_NET_PREM_FC,
              P_NET_PREM_LC_1     => M_NET_PREM_LC_1,
              P_NET_PREM_LC_2     => M_NET_PREM_LC_2,
              P_NET_PREM_LC_3     => M_NET_PREM_LC_3
          );

          DBMS_OUTPUT.PUT_LINE('M_PLACE_SI_FC: ' || M_PLACE_SI_FC);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_SI_LC_1: ' || M_PLACE_SI_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_SI_LC_2: ' || M_PLACE_SI_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_SI_LC_3: ' || M_PLACE_SI_LC_3);
      
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PML_FC: ' || M_PLACE_PML_FC);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PML_LC_1: ' || M_PLACE_PML_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PML_LC_2: ' || M_PLACE_PML_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PML_LC_3: ' || M_PLACE_PML_LC_3);
      
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PREM_FC: ' || M_PLACE_PREM_FC);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PREM_LC_1: ' || M_PLACE_PREM_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PREM_LC_2: ' || M_PLACE_PREM_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_PLACE_PREM_LC_3: ' || M_PLACE_PREM_LC_3);
      
          DBMS_OUTPUT.PUT_LINE('M_OVR_PREM_FC: ' || M_OVR_PREM_FC);
          DBMS_OUTPUT.PUT_LINE('M_OVR_PREM_LC_1: ' || M_OVR_PREM_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_OVR_PREM_LC_2: ' || M_OVR_PREM_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_OVR_PREM_LC_3: ' || M_OVR_PREM_LC_3);
      
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_FC: ' || M_NET_PREM_FC);
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_LC_1: ' || M_NET_PREM_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_LC_2: ' || M_NET_PREM_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_NET_PREM_LC_3: ' || M_NET_PREM_LC_3);
      END;
      `,
      {
        pFpsSysId:        { val: fpsSysId === null ? null : Number(fpsSysId),  type: oracledb.NUMBER },
        pCustCode:        { val: custCode === null ? null : String(custCode),  type: oracledb.STRING },
        pBrkCode:         { val: brkCode === null ? null : String(brkCode),    type: oracledb.STRING },
        pCustPerc:        { val: custPerc === null ? null : Number(custPerc),  type: oracledb.NUMBER },
        pPremOverriddenYn:{ val: premOverriddenYn === null ? null : String(premOverriddenYn), type: oracledb.STRING },
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

module.exports = { calculatePrFacCust };
