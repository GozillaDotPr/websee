const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transrawin = koneksi.define('Transrawin', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_pasien: {
    type: DataTypes.STRING(20),
    foreignKey: true,
    allowNull: false
  },
  kamar: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false
  },
  cek_out: {
    type: DataTypes.DATE,
    allowNull: true
  },
}, {
    freezeTableName: true
});

module.exports=Transrawin;