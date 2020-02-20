// Requiring path to so we can use relative routes to our HTML files

const path = require('path')

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// HTML-Routes
module.exports = (app) => {

  // Department HTML routes .................................................
  app.get('/depmts', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/index.html'))
  })



  app.get('/depmts-add',  isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptAdd.html'))
  })

  app.get('/depmts-edit', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptEdit.html'))
  })

  app.get('/depmts-delete',  isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptDelete.html'))
  })

  // Products HTML routes.....................................................
  app.get('/prods', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/index.html'))
  })

  app.get('/prods-add',  isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodAdd.html'))
  })

  app.get('/prods-edit',  isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodEdit.html'))
  })

  app.get('/prods-delete',  isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/products/prodDelete.html'))
  })

  // Orders ..................................................................
  app.get('/carts', (req, res) => {
    res.sendFile(path.join(__dirname,  isAuthenticated, '../public/carts/index.html'))
  })


} // module.exports