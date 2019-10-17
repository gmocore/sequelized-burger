// setup burger table in db 
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // table columns
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  // return object with data
  return Burger;
};