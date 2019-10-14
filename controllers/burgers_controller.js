const express = require("express");
const router = express.Router();
const db = require("../models/burger");


// get route for all burgers
router.get("/burgers", (req, res) => {
  
    // render index and object above
    res.render("index", handlebarsObject);
  });

  db.Burger.findAll({})
  .then(result => {
    console.log(result)
    let handlebarsObject = {
      burgers: data
    };
    res.render("index", handlebarsObject); 
  })

  // post route to add a new burger
  router.post("/add", (req, res) => {

    // burger.create(req.body.burger_name, () => {
    //   // redirect to home page once burger is added
    //   res.sendStatus(200);
    // });
  // });
});

// post route to update selected burger
router.post('/eat/:id', (req, res) => {
  // burger.update(req.params.id, () => {
  //   // redirect when value is changed
  //   res.redirect('/');
  // })
})

// export router to be used in server
module.exports = router;
