const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transperdet = koneksi.define('Transperdet', {
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
    allowNull: false,
    references: {
          model: 'transper', // 'fathers' refers to table name
          key: 'id', // 'id' refers to column name in fathers table
       }
  },
  id_tindakan: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false,
        references: {
          model: 'tinmed', // 'fathers' refers to table name
          key: 'id', // 'id' refers to column name in fathers table
       }
  },
  biaya: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports=Transperdet;