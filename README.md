
# Burger Fervor

A simple app to create burgers and then add them to a database and then devour them. Think of it like funday-sunday, only without any of the calories!

## Deployed Project

https://fast-crag-06880.herokuapp.com


## Built With

### Languages
HTML, CSS, JavaScript, Node, MySQL, Handlebars

### Libraries/Packages
jQuery, Express, Express-Handlebars, mysql, AJAX, Sequelize

## Code Overview
#### Backend
This application is created using the MVC architectural pattern. The sequelize ORM is used to modify the database. Connection to the database is established in `config.json` which is used by the sequelize to update the database in the desired manner. The model uses the sequelize to set a template to be used by the model.  `GET` and `POST` routes are handled in the controller to view or update data on the front end.  A handlebars object is created and each time the home route (`/`) is visited. 
#### Frontend
jQuery and AJAX is used to collect values entered into the from. the data is submitted to the `POST` route and added to the database. Handlebars is used to render the html dynamically based on the information from the MySQL table. 
Initially each Burger is rended with a devour button with an corresponding to the id in the database. When the button is clicked, the value is updated to be `devoured : true`. When the value is changed the page will update with the burger in the devoured column. 

## Author

* **Gerritt Black** - *Frontend/Backend/Database* - [gmocore](https://github.com/gmocore)



