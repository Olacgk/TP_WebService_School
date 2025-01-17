const { Sequelize } = require('sequelize');

const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

const sequelize = new Sequelize( database, username, password, {
    host: host,
    dialect: 'mariadb',
    port: 3306,       
    dialectOptions: {
        useUTC: false,
    },
    timezone: '+00:00',
});

module.exports = sequelize;