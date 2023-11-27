const express = require("express");
const router = express.Router();
const pool = require("../config/db").pool;

router.put("/", (req, res) => {
  const newData = req.body;

  newData.forEach(({ keyi18n, value }) => {
    pool.query(
      "UPDATE content_de SET value_de = ? WHERE keyi18n = ?",
      [value, keyi18n],
      (error, results, fields) => {
        if (error) throw error;
      }
    );
  });

  res.json({ message: "Data updated successfully" });
});

module.exports = router;
