const express = require("express");
const router = express.Router();
const pool = require("../config/db").pool;

router.get("/", (req, res) => {
  console.log("mySQL cases");
  pool.query("SELECT * FROM cases", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM cases WHERE id = ?`;
  const values = [id];

  pool.query(sql, values, (error, results, fields) => {
    if (error) throw error;
    res.json(results[0]);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM cases WHERE id = ?`;
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

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { visible } = req.body;
  pool.query(
    `UPDATE cases SET visible=${visible} WHERE id=${id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error updating case visibility");
      } else {
        res.status(200).send("Case visibility updated successfully");
      }
    }
  );
});

module.exports = router;
