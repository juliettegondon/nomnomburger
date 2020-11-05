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
    var hbObj = { burgers: data };
    console.log("--------->", hbObj);
    res.render("index", hbObj);
  });
});


// POST - insertOne(); inserts one burger to db
router.post("/burgers", function(req, res){
  console.log("burger name --->", req.body.burger_name);
  burger.insertOne(req.body.burger_name, function(){
    res.redirect("/")
  });
});



// PUT - updateOne(); updates one burger to devoured in db
router.put("/burgers/:id", function(req, res) {
	console.log("burger ID --->", req.params.id);
	burger.updateOne(req.params.id, function() {
	res.redirect("/");
	});
})

module.exports = router;