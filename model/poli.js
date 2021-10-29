const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi");

const Poli = koneksi.define('poli', {
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
}, {
    freezeTableName: true
});

module.exports=Poli;