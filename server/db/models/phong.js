const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('phong', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: Sequelize.TEXT,
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
});
