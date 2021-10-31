const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const Sequelize = new Sequelize(
    'user_table',
    'root',
    'sqlroot',
    {
        dialect: 'mysql',
        host: '3001',
    }
);

module.exports = sequelize;

global.sequelize =sequelize;