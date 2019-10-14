const connection = require("./connection");

// methods to query db
const orm = {
  displayAll: (tableName, cb) => {
    let queryString = `SELECT * FROM ??;`;
    
    connection.query(queryString, [tableName], (error, result) => {
      if (error) throw error;
      
      cb(result)
    })
  },
  
  create: (burger_name, cb) => {
    let queryString = `INSERT INTO burgers SET ?;`;

    connection.query(queryString, {burger_name: burger_name}, (error, result) => {
      if (error) throw error;

      cb(result)
    })
  },
  update: (id, cb) => {
    connection.query(`UPDATE burgers SET ? WHERE id = ?`, [{devoured: true}, id], (error, result) => {
      if (error) throw error;

      cb(result);
    })
  }
};

// export to use with model 
module.exports = orm;
