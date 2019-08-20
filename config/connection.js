// Starting with declaring the dependencies
const mysql = require("mysql");


// Creating Connection To Mysql
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });

// Console logging the status of the connection 
  connection.connect(function(err){
    if (err) {
      console.error("error connection: " + error.stack);
      return;
    }
    console.log("connected as id: " + connection.threadId);
  })

// Calling the connection  
// connection.connect();

// Exporting the Connection
module.exports = connection;