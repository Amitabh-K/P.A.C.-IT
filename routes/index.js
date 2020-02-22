// Routes Index
module.exports = (app) => {
  require('./htmlRoutes')(app)
  require('./apiRoutes')(app) 
  require('./api-routes')(app)
  require('./html-routes')(app) 
  
}