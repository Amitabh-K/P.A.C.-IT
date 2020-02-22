
const path = require('path')
var isAuthenticated = require("../config/middleware/isAuthenticated");


// HTML-Routes
module.exports = (app) => {

  
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/");
    // }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/signup", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });



  // Department HTML routes .................................................
  app.get('/depmts', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/index.html'))
  })

  app.get('/depmts-add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptAdd.html'))
  })

  app.get('/depmts-edit', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptEdit.html'))
  })

  app.get('/depmts-delete', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptDelete.html'))
  })

  // Products HTML routes.....................................................
  app.get('/prods', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/index.html'))
  })

  app.get('/prods-add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodAdd.html'))
  })

  app.get('/prods-edit', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodEdit.html'))
  })

  app.get('/prods-delete', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodDelete.html'))
  })

  // Orders ..................................................................
  app.get('/carts', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/carts/index.html'))
  })


} // module.exports