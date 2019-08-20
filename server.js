// Declaring the Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Use the app varaible to run express
var app = express();

// Setting up port for Heroku
var PORT = process.env.PORT || 3000;

// Adding the static route 
app.use(express.static("./public"));

// Connection our body parser elements 
// First is the url body parser
// Second is the json body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up handlenabars and our template engine 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes for application 
// Second is using the routes 
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Having the port listen 
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});