const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Jenpen = koneksi.define('Jenpen', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nama: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  biaya: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports=Jenpen;