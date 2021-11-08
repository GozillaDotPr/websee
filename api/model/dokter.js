const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Dokter = koneksi.define('dokter', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_poli: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false,
    references: {
          model: 'poli', // 'fathers' refers to table name
          key: 'id', // 'id' refers to column name in fathers table
       }
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

module.exports=Dokter;