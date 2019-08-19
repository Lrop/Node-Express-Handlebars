// Require Dependencies First 
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require("body-parser");


// Setting up our Port 
var app = express();
var PORT = process.env.PORT || 3606;

// Adding Static files 
app.use(express.static("public"));

// Connecting our body parsing elements 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up handlebars 
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Setting up routes for future use 
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


// Setting up our port to listen 
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
  });