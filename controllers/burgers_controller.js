// the controller handles all the logic, has all requests and endpoints.
// the controller is the glue between the view and the model ---- handles business logic!
// dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
// ROUTES
// GET
/* router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
}); */
// POST
// PUT
module.exports = router;