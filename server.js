// dependencies 
var express = require("express");
var PORT = process.env.PORT || 4040;
var app = express();


// handlebars
var exphbs = require("express-handlebars");

// rendering engine - handlebars to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// giving server access to routes in controller folder
var routes = require("./controllers/burgers_Controller.js");
app.use(routes);

// serve static content for the app from public folder.
app.use(express.static("public"));

// middleware makes data available before it hts route
// setup to handle URL encodings and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// start & log server
app.listen(PORT,() => {
  console.log(`listening at ${PORT}`);
});
