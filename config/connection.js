var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// Check if connection is working 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the Module
module.exports = connection;
