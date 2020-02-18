// Products-Routes
const db = require('../models')

module.exports = (app) => {

  // find all
  app.get("/prodcts", (req, res) => {
    db.products.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // find one 
  app.get('/prodcts/:id', (req, res) => {
    db.products.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // find all prod for a department 
  app.get('/dept-prodcts/:id', (req, res) => {
    db.products.findAll({
        where: {
          departmentId: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // create record
  app.post('/prodcts', (req, res) => {
    db.products.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // update record
  app.put('/prodcts/:id', (req, res) => {
    db.products.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete one
  app.delete('/prodcts/:id', (req, res) => {
    db.products.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete all
  app.delete('/prodcts', (req, res) => {
    db.products.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

} // module.exports