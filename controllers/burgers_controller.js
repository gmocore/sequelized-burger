const express = require("express");
const router = express.Router();
const db = require("../models");
const hbsexp = require("express-handlebars");

// get route for all burgers
router.get('/', (req, res) => {
  res.redirect('/burgers')
})

router.get("/burgers", (req, res) => {
  db.Burger.findAll({}).then(result => {
    let handlebarsObject = {
      burgers: result
    };
    res.render("index", handlebarsObject);
  });
});

// post route to add a new burger
router.post("/add", (req, res) => {

  db.Burger.create({
    burger_name: req.body.burger_name
  })
  .then(result => {
    res.redirect('/')
  })
});

// post route to update selected burger
router.post("/eat/:id", (req, res) => {
 db.Burger.update({
   devoured: true
 }, {where: {id: req.params.id}})
 .then(result => {
   res.redirect('/');
 })
});

// export router to be used in server
module.exports = router;
