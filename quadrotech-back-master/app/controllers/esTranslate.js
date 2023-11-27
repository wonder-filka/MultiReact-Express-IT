const express = require("express");
const router = express.Router();
const pool = require("../config/db").pool;

router.get("/", (req, res) => {
  console.log("mySQL en");
  pool.query("SELECT * FROM content_es", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
