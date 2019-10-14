// set up connection to database
require('dotenv').config();
const sql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = sql.createConnection(process.env.JAWSDB_URL);
} else {
  // connection and credentials to export
  connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "gerritt",
    database: "burger_db",
    port: 3306
  });
}

// connection to db
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

//export to use with orm
module.exports = connection;
