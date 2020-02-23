// Modules
const express = require('express')
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const path = require('path')
const bodyParser = require('body-parser')
var db = require("./models");

//server variable
const app = express()
 
// express middleware: static files
app.use(express.static(path.join(__dirname, 'public')));
// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({extended: true }))
// express middleware: capable to handle simple json
app.use(bodyParser.json())

app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/htmlRoutes.js")(app);
require("./routes/api-routes.js")(app);
 
// Routes
require("./routes")(app);

// sync DB and listen
require('./models').sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
  })
})
