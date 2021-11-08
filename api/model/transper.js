const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi");

const Transper = koneksi.define('transper', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_dokter: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false,
    references: {
          model: 'dokter', // 'fathers' refers to table name
          key: 'id', // 'id' refers to column name in fathers table
       }
  },
  id_pasien: {
    type: DataTypes.STRING(20),
    foreignKey: true,
    allowNull: false,
    references: {
          model: 'Pasien', // 'fathers' refers to table name
          key: 'no_rm', // 'id' refers to column name in fathers table
       }
  },
  id_diagnosa: {
    type: DataTypes.INTEGER(10),
    foreignKey: true,
    allowNull: false,
    references: {
          model: 'Diagnosa', // 'fathers' refers to table name
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

module.exports=Transper;