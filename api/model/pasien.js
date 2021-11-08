const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Pasien = koneksi.define('Pasien', {
  // Model attributes are defined here
  no_rm: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  nama: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  no_telp: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports=Pasien;