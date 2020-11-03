// the controller handles all the logic, has all requests and endpoints.
// the controller is the "glue between the view and the model ---- handles business logic!"
// dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
// ROUTES
// GET - selectAll(); retrieves all from db
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbObj = {burgers: data};
    console.log(hbObj);
    res.render("index", hbObj);
  });
});


// POST - insertOne(); inserts one burger to db
router.post("/", function(req, res){
  burger.insertOne(["burger_name", "devoured"], 
  [req.body.burger_name, req.body.devoured], function(result) {
  res.redirect("/");
  });
});



// PUT - updateOne(); updates one burger to devoured in db
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
	console.log("condition --->", condition);
	burger.updateOne(condition, function(result) {
	res.redirect("/");
	});
})

module.exports = router;