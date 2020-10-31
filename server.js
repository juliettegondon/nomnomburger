var PORT = process.env.PORT || 8080;

// dependencies
var express = require("express");
var app = express();

// handlebars
var exphbs = require("express-handlebars");

// giving server access to routes
var routes = require("./controllers/burgers_Controller.js");
app.use(routes);

// serve static content for the app from public folder.
app.use(express.static("public"));

// parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rendering engine - handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// start & log server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
