const path = require('path')
var isAuthenticated = require("../config/middleware/isAuthenticated");


// HTML-Routes
module.exports = (app) => {

  
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/auth/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/auth/login.html"));
  });

  app.get("/logout", function(req, res) {
    // If the user already has an account send them to the members page

    res.sendFile(path.join(__dirname, "../public/auth/logout.html"));
  });

 
  // Department HTML routes .................................................
  app.get('/depmts', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/index.html'))
  })

  app.get('/depmts-add', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptAdd.html'))
  })

  app.get('/depmts-edit', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptEdit.html'))
  })

  app.get('/depmts-delete', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptDelete.html'))
  })

  // Products HTML routes.....................................................
  app.get('/', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.get('/prods', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/index.html'))
  })

  app.get('/prods-add', isAuthenticated,  (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodAdd.html'))
  })

  app.get('/prods-edit', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodEdit.html'))
  })

  app.get('/prods-delete', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodDelete.html'))
  })

  // Orders ..................................................................
  app.get('/carts', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/carts/index.html'))
  })


} // module.exports