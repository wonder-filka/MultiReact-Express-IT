const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
  const { caseData, dataEn, dataDe, dataEs } = req.body;

  dataEn.forEach((item) => {
    const { keyi18n, value } = item;
    const query = `INSERT INTO content_en (keyi18n, value_en) VALUES ('${keyi18n}', '${value}') ON DUPLICATE KEY UPDATE value_en = '${value}'`;

    db.executeQuery(query, (error, results, fields) => {
      if (error) {
        console.error(
          `Error inserting or updating data for keyi18n: ${keyi18n}`
        );
      } else {
        console.log(`Data inserted or updated for keyi18n: ${keyi18n}`);
      }
    });
  });

  dataDe.forEach((item) => {
    const { keyi18n, value } = item;
    const query = `INSERT INTO content_de (keyi18n, value_de) VALUES ('${keyi18n}', '${value}') ON DUPLICATE KEY UPDATE value_de = '${value}'`;

    db.executeQuery(query, (error, results, fields) => {
      if (error) {
        console.error(
          `Error inserting or updating data for keyi18n: ${keyi18n}`
        );
      } else {
        console.log(`Data inserted or updated for keyi18n: ${keyi18n}`);
      }
    });
  });

  dataEs.forEach((item) => {
    const { keyi18n, value } = item;
    const query = `INSERT INTO content_es (keyi18n, value_es) VALUES ('${keyi18n}', '${value}') ON DUPLICATE KEY UPDATE value_es = '${value}'`;

    db.executeQuery(query, (error, results, fields) => {
      if (error) {
        console.error(
          `Error inserting or updating data for keyi18n: ${keyi18n}`
        );
      } else {
        console.log(`Data inserted or updated for keyi18n: ${keyi18n}`);
      }
    });
  });

  const { title, descript, need, result, keysinfo, imgMain, imgCase } =
    caseData;
  const query = `INSERT INTO cases (title, descript, need, result, keysinfo, imgMain, imgCase, visible) VALUES ('${title}', '${descript}', '${need}', '${result}','${keysinfo}', '${imgMain}', '${imgCase}', true)`;

  db.executeQuery(query, (error, results, fields) => {
    if (error) {
      res.status(500).send("Error inserting data into cases");
    } else {
      res.send("Data inserted into cases");
    }
  });
});

module.exports = router;
