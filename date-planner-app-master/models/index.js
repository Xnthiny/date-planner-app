"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
<<<<<<< HEAD
const config = require(__dirname + "/../config/config.json")[env];
var db = {};
=======
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
var cors = require("cors");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
<<<<<<< HEAD
    db[model.Name] = model;
=======
    db[model.name] = model;
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
