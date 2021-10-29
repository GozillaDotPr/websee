const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transpendet = koneksi.define('Transpendet', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_transaksi_penunjang: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false
  },
  id_jenis_penunjang: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false
  },
  hasil: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  biaya: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports=Transpendet;