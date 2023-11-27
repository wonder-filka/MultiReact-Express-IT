const mysql = require("mysql2");
const dbConfig = require("../config/db.config");
const logger = require("../../logger"); // Импортируйте логгер

const pool = mysql.createPool({
  connectionLimit: 5,
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

// Логирование ошибок при подключении к базе данных
pool.on("connection", (connection) => {
  logger.info("Connected to the database");
});

pool.on("error", (err) => {
  logger.error(`Database error: ${err.message}`);
});

// Функция для логирования запросов к базе данных
function executeQuery(query, callback) {
  pool.query(query, (err, results) => {
    if (err) {
      logger.error(`Error executing query: ${query} - ${err.message}`);
      callback(err, null);
    } else {
      logger.info(`Executed query: ${query}`);
      callback(null, results);
    }
  });
}

exports.pool = pool;
exports.executeQuery = executeQuery;

// const connection = mysql.createConnection({
//   host: dbConfig.host,
//   user: dbConfig.user,
//   password: dbConfig.password,
//   database: dbConfig.database,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database: " + err.stack);
//     return;
//   }
//   console.log("Connected to database with ID " + connection.threadId);
// });

// module.exports = connection;
