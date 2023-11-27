const express = require("express");
const router = express.Router();
const pool = require("../config/db").pool;

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM Cases WHERE id = ?`;
  const values = [id];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting case from database");
      return;
    }
    console.log("Case deleted from database");
    res.status(200).send("Case deleted from database");
  });
});

module.exports = router;
