const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Usuario = sequelize.define(
  'usuarios',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false },
);

module.exports = Usuario;
