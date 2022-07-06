const sequelize = require('../database')
const { DataTypes } = require('sequelize')

const UserModel = sequelize.define('users', {
   id: {
      type: DataTypes.INTEGER,
      //aumenta o numero do id sozinho
      autoIncrement: true,
      //nao deixa repetir o numero do id
      primaryKey: true
   },
   nome: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false
   },
   senha: {
      type: DataTypes.STRING,
      allowNull: false
   },
   nivel: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   timestamps: false
})

module.exports = UserModel