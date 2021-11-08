const { Sequelize } = require('sequelize');
const db= require("../koneksi");

const userModel=db.define('user',{
	id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

},{
	freezeTableName: true
});
module.exports = userModel;