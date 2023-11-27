const express = require("express");
const router = express.Router();
const pool = require("../config/db").pool;

router.delete("/", (req, res) => {
  const { keyi18n } = req.body;
  const sql = `DELETE FROM content_en WHERE keyi18n IN (?)`;
  const values = [keyi18n];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting content_en from database");
      return;
    }
    console.log("Content_en key deleted from database");
    res.status(200).send("Content_en key deleted from database");
  });
});

module.exports = router;
