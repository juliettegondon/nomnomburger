var mysql = require("mysql");


var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'juliette',
    database: 'burgres_db'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("CONNECTION ERROR: " + err.stack);
    return;
  }
  console.log("GREAT SUCCESS! Connected at ID: " + connection.threadId);
});

module.exports = connection;
