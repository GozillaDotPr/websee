const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi");

const Pendrawja = koneksi.define('penRawJal', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  no_rm: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  id_poli: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports=Pendrawja;