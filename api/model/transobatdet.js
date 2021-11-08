const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transobatdet = koneksi.define('Transobatdet', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_transaksi_obat: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false
  },
  id_obat: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false
  },
  jumlah: {
    type: DataTypes.INTEGER(3),
    allowNull: false
  },
  harga: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports=Transobatdet;