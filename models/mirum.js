const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Mirum extends Model {}

Mirum.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKEY: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
}{
    sequelize,
    freezeTableName: true,
    modelName: 'mirum'
});

module.exports = Mirum