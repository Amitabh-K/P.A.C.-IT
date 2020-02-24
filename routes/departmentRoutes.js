// Department-Routes
const db = require('../models')

module.exports = (app) => {

  // find all
  app.get("/depts", (req, res) => {
    console.log('ping')
    db.departments.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // find one
  app.get('/depts/:id', (req, res) => {
    db.departments.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // create record
  app.post('/depts', (req, res) => {
    db.departments.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // update record
  app.put('/depts/:id', (req, res) => {
    db.departments.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete one
  app.delete('/depts/:id', (req, res) => {
    // todo: How to delete all products for a department?
    //        Cannot truncate a table referenced in a foreign key constraint
    db.departments.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete all
  app.delete('/depts', (req, res) => {
    db.departments.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

} // module.exports