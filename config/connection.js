var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "juliette",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("CONNECTION ERROR: " + err.stack);
    return;
  }
  console.log("GREAT SUCCESS! Connected at ID: " + connection.threadId);
});

module.exports = connection;
