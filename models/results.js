const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Result extends Model {}

Result.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    link: DataTypes.STRING,
    date: DataTypes.DATEONLY
  },
  {
    sequelize
  }
);

module.exports = Result;