const orm = require("../config/orm");

// serves as a template for calling db in controller
const burger = {
  selectAll: (cb) => {
    orm.displayAll('burgers', res => {
      cb(res);
    })
  },
  create: (burger_name, cb) => {
    orm.create(burger_name, res => {
      cb(res);
    })
  }
  ,
  update: (id,cb) => {
    orm.update(id, res => {
      cb(res);
    })
  }
};

// export to use with controller
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
      burger_name: {
        type:  DataTypes.STRING,
        allowNull : false
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
    return Burger;
  };
