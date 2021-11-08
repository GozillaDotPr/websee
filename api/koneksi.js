const { Sequelize } = require('sequelize');

const db=new Sequelize('webser1', 'root', '',{
	host: 'localhost',
	dialect: 'mysql', 
});

module.exports = db;