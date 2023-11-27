const express = require("express");
const router = express.Router();
const pool = require("../config/db").pool;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  console.log("mySQL users get");

  db.executeQuery("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      res.status(500).send("Error fetching data from users");
    } else {
      res.json(results);
    }
  });
});

router.post("/", (req, res) => {
  const { username, password } = req.body.user;
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  pool.query(query, [username, password], (error, results, fields) => {
    if (error) {
      res.status(500).send("Error querying users");
    } else {
      if (results.length > 0) {
        const token = jwt.sign(
          { id: results[0].id, username: results[0].username },
          "my-secret-key",
          { expiresIn: "1h" }
        );
        // res.status(200).send("User authenticated successfully");
        res.status(200).json({
          token,
          id: results[0].id,
          username: results[0].username,
          message: "User authenticated successfully",
        });
      } else {
        res.status(401).send("Invalid login or password");
      }
    }
  });
});
module.exports = router;
