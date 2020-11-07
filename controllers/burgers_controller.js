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
  /*   console.log("--------->", hbObj); */
    res.render("index", hbObj);
  });
});

router.get('/:id', (req, res) => {
  res.send(`YOU SENT A GET REQUEST TO THE ID ENDPOINT #${req.params.id}`)
})


// POST - insertOne(); inserts one burger to db
router.post("/", function(req, res){
  console.log('RECEIVED POST REQUEST AT ENDPOINT / --->')
  console.log("burger name --->", req.body.burger_name);
  burger.insertOne(req.body.burger_name, function(err, res){
    if (err) throw err;
    res.redirect("/")
  });
});



// POST - updateOne(); updates one burger to devoured in db
router.post("/:id", function(req, res) {
	/* console.log("burger ID --->", req.params.id); */
  burger.updateOne({devoured: 1}, `id = ${req.params.id}`, function(data){
    res.redirect("/")
  })
})

module.exports = router;