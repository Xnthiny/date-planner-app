var db = require("../models");
<<<<<<< HEAD

module.exports = function(app) {

  // Get all users
  app.get("/api/users", function (req, res) {
    Users.findAll({}).then(allUsers => res.json(allUsers))
  });

  // Create a new user
  app.post("/api/newuser", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var gender = req.body.gender;
    var age = req.body.age;
    var location = req.body.location;

    db.Users.create({
      username: username,
      password: password,
      name: name,
      gender: gender,
      age: age,
      location: location
    }).then(newUser => res.json(newUser))
  });

  // Delete a user by id
  app.delete("/api/deleteuser/:id", function (req, res) {
    var userID = req.params.id;
    db.Users.destroy({where: {id: userID}}).then(deletedUser => res.json(deletedUser))
  })
=======
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

process.env.SECRET_KEY = "secret"


module.exports = function (app) {

  // Get all users
  app.get("/api/users", function (req, res) {
    db.Users.findAll({}).then(allUsers => res.json(allUsers));
  });

  // REGISTER
  app.post("/api/register", function (req, res) {

    var createUser = {
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      location: req.body.location
    }

    db.Users.findOne({
      where: {
        username: createUser.username
      }
    }).then(newUser => {
      if (!newUser) {
        var hash = bcrypt.hashSync(createUser.password, 10)
        createUser.password = hash
        db.Users.create(createUser).then(newUser => {
          let token = jwt.sign(newUser.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.json({ token: token })
        })
      } else {
        res.json({ error: 'Username already exists.' })
      }
    }
    )
      .catch(err => {
        res.send('error: ' + err)
      })
  });

  // LOGIN
  app.post("/api/login", function (req, res) {
    db.Users.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({token: token})
      } else {
        res.send("User does not exist.")
      }
  }).catch(err => {
        res.send('error: ' + err)
      })
  })

  // Delete a user by id
  app.delete("/api/deleteuser/:id", function (req, res) {
    var userID = req.params.id;
    db.Users.destroy({ where: { id: userID } }).then(deletedUser =>
      res.json(deletedUser)
    );
  });
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b
};
