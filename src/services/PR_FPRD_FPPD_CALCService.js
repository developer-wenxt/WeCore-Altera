const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function calculatePrFprdFppd(
  fpsSysId = null,
  fprdYn = 'Y',
  fppdYn = 'Y',
  praiSysId = null,
  pcCode = null,
  placePerc = null
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
          M_FAC_PREM_FC       NUMBER;
          M_FAC_PREM_LC_1     NUMBER;
          M_FAC_PREM_LC_2     NUMBER;
          M_FAC_PREM_LC_3     NUMBER;
          M_FAC_RATE          NUMBER;
      BEGIN
          PR_FPRD_FPPD_CALC(
              P_FPS_SYS_ID       => :pFpsSysId,
              P_FPRD_YN          => :pFprdYn,
              P_FPPD_YN          => :pFppdYn,
              P_PRAI_SYS_ID      => :pPraiSysId,
              P_PC_CODE          => :pPcCode,
              P_PLACE_PERC       => :pPlacePerc,
              P_PLACE_SI_FC      => M_PLACE_SI_FC,
              P_PLACE_SI_LC_1    => M_PLACE_SI_LC_1,
              P_PLACE_SI_LC_2    => M_PLACE_SI_LC_2,
              P_PLACE_SI_LC_3    => M_PLACE_SI_LC_3,
              P_PLACE_PML_FC     => M_PLACE_PML_FC,
              P_PLACE_PML_LC_1   => M_PLACE_PML_LC_1,
              P_PLACE_PML_LC_2   => M_PLACE_PML_LC_2,
              P_PLACE_PML_LC_3   => M_PLACE_PML_LC_3,
              P_PLACE_PREM_FC    => M_PLACE_PREM_FC,
              P_PLACE_PREM_LC_1  => M_PLACE_PREM_LC_1,
              P_PLACE_PREM_LC_2  => M_PLACE_PREM_LC_2,
              P_PLACE_PREM_LC_3  => M_PLACE_PREM_LC_3,
              P_FAC_PREM_FC      => M_FAC_PREM_FC,
              P_FAC_PREM_LC_1    => M_FAC_PREM_LC_1,
              P_FAC_PREM_LC_2    => M_FAC_PREM_LC_2,
              P_FAC_PREM_LC_3    => M_FAC_PREM_LC_3,
              P_FAC_RATE         => M_FAC_RATE
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
      
          DBMS_OUTPUT.PUT_LINE('M_FAC_PREM_FC: ' || M_FAC_PREM_FC);
          DBMS_OUTPUT.PUT_LINE('M_FAC_PREM_LC_1: ' || M_FAC_PREM_LC_1);
          DBMS_OUTPUT.PUT_LINE('M_FAC_PREM_LC_2: ' || M_FAC_PREM_LC_2);
          DBMS_OUTPUT.PUT_LINE('M_FAC_PREM_LC_3: ' || M_FAC_PREM_LC_3);
      
          DBMS_OUTPUT.PUT_LINE('M_FAC_RATE: ' || M_FAC_RATE);
      END;
      `,
      {
        pFpsSysId:  { val: fpsSysId === null ? null : Number(fpsSysId),  type: oracledb.NUMBER },
        pFprdYn:    { val: fprdYn === null ? null : String(fprdYn),      type: oracledb.STRING },
        pFppdYn:    { val: fppdYn === null ? null : String(fppdYn),      type: oracledb.STRING },
        pPraiSysId: { val: praiSysId === null ? null : Number(praiSysId), type: oracledb.NUMBER },
        pPcCode:    { val: pcCode === null ? null : String(pcCode),      type: oracledb.STRING },
        pPlacePerc: { val: placePerc === null ? null : Number(placePerc), type: oracledb.NUMBER },
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

module.exports = { calculatePrFprdFppd };
