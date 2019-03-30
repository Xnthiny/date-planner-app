require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
<<<<<<< HEAD

var db = require("./models");

=======
var db = require("./models");
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
<<<<<<< HEAD
=======
// app.use(bodyParser.urlencoded({ extended: false }));

>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Check connection to the database
db.sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });


// Starting the server, syncing our models ------------------------------------/
<<<<<<< HEAD
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
=======
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
