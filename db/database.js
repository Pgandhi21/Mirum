const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const Sequelize = new Sequelize(
    'Mirum',
    'user_table',
    'sqlroot',
    {
        dialect: 'mysql',
        host: '3001',
    }
);

module.exports = sequelize