const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pessoa', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
