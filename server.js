// Modules
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//Autentications

var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

//server variable
const app = express()

// express middleware: static files
app.use(express.static(path.join(__dirname, 'public')));
// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({
  extended: true
}))
// express middleware: capable to handle simple json
app.use(bodyParser.json())

app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes")(app);

// sync DB and listen
require('./models').sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
})