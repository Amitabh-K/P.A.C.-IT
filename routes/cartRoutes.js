// Order-Routes

const db = require('../models')

module.exports = (app) => {

  // find one 
  app.get('/carts/:id', (req, res) => {
    db.carts.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // create record
  app.post('/carts', (req, res) => {
    db.carts.create(req.body)
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // delete one
  app.delete('/carts/:id', (req, res) => {
    db.carts.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Cart-Items ................................ 

  // Find All Cart items
  app.get('/cartitems/:id', (req, res) => {
    db.cartitems.findAll({
        where: {
          cartId: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // create item
  app.post('/cartitems', (req, res) => {
    db.cartitems.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete one
  app.delete('/cartitems/:id', (req, res) => {
    db.cartitems.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/cartitems-all/:id', (req, res) => {
    db.cartitems.destroy({
        where: {
          cartId: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })


}