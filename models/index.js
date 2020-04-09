// this file makes the database connection, collects all the models
// and sets the associations
// other files can use this for database access by requiring it and
// assigning the exports

// assuming that this file (index.js) is in a subdirectory called models:
//  const models = require('./models');

'use strict';

// database connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'critters.sqlite'
});

// import models
const Critter = sequelize.import("./critters.js");
const Coordinate = sequelize.import("./coordinates.js");

// Add associations here


module.exports = {
  Critter, Coordinate
};
