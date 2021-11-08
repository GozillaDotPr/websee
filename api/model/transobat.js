const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transobat = koneksi.define('Transobat', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_transaksi_periksa: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports=Transobat;