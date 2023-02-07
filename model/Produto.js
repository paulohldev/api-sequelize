const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Produto = sequelize.define(
  'produtos',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nomeProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

module.exports = Produto;
