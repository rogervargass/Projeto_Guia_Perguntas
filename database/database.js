const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'coringa123',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;