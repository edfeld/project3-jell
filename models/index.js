'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];  // [ERE] fix db_password issue across pc and macs
const db = {};

console.log('config', config);

let sequelize;
if (env === 'production') {
  console.log(config);
  // This code has to be toggled in order to make the Prod environment run on local -- The first line is for prod on local
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
  // sequelize = new Sequelize(config.database, config.username, config.password, config);
} else {
  console.log('config ', config);
  console.log('env', env);
  console.log('loading dev')
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
