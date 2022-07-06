const Sequelize = require('sequelize')
const sequelize = new Sequelize('banco', 'user', 'password', {

    dialect: 'sqlite',
    host: './src/database/db.sqlite'

})

module.exports = sequelize