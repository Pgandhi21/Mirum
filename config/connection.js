const { Sequelize } = require('sequelize');
const Sequelize = require('sequelize');
require('dotenv').config();

const Sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports= Sequelize;
