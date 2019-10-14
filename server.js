const express = require("express");
const PORT = process.env.PORT || 3000;
const db = require('./models');

const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handlebars = require("express-handlebars");

// handlebars middleware
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import controller routes
const routes = require("./controllers/burgers_controller.js");

// use imported routes
app.use(routes);

db.sequelize.sync().then(()=> app.listen(PORT, () => console.log(`listening on ${PORT}`)));

// start server
// app.listen(PORT, () => console.log(`listening on ${PORT}`));
