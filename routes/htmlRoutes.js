const path = require('path')

// HTML-Routes
module.exports = (app) => {

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