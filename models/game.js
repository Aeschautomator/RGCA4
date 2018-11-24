
// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var game = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.all('games', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('games', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  update: function(objColVals, condition, cb) {
    orm.update('games', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = games;