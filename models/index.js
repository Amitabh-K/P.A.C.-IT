// models/index.js will read all model files in this folder and will associated 
// the sequelizer connection element inside teh files. This module will be exported 
// and will contain the SQLZ and sequelizer objects

'use strict'

const fs = require('fs')
const path = require('path')
const SQLZ = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]
let db = {}
const sequelize = config.use_env_variable ? new SQLZ(process.env[config.use_env_variable], config) 
       : new SQLZ(config.database, config.username, config.password, config)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

// Add the function "associate" into the model to 
// establish any releationship between tables
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = SQLZ

module.exports = db
