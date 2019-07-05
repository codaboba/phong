const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  details: {
    type: Sequelize.TEXT,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});
