const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('arsipSurat', 'root', '', {
    host:'localhost',
    dialect : 'mysql',
  })

  module.exports = sequelize;