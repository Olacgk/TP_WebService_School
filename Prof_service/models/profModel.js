const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prof = sequelize.define('Prof', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'professors',
    timestamps: true,
    underscored: true
});

module.exports = Prof;
