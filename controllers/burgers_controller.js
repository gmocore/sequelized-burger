const express = require("express");
const router = express.Router();
const db = require("../models");
const hbsexp = require("express-handlebars");

// get route for all burgers
router.get('/', (req, res) => {
  res.redirect('/burgers')
})

router.get("/burgers", (req, res) => {
  // find all burgers in db
  db.Burger.findAll({}).then(result => {
    // handlebar render object
    let handlebarsObject = {
      burgers: result
    };
    // render handlebars index page
    res.render("index", handlebarsObject);
  });
});

// post route to add a new burger
router.post("/add", (req, res) => {

  db.Burger.create({
    // create new burger in fb
    burger_name: req.body.burger_name
  })
  .then(result => {
    // reload main page on submit
    res.redirect('/')
  })
});

// post route to update selected burger
router.post("/eat/:id", (req, res) => {
 db.Burger.update({
   // change devoured value to true when post route is hit
   devoured: true
 }, {where: {id: req.params.id}})
 .then(result => {
   // redirect page to display updated page 
   res.redirect('/');
 })
});

// export router to be used in server
module.exports = router;
