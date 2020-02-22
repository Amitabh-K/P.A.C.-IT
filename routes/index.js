// Routes Index
module.exports = (app) => {
  require('./htmlRoutes')(app)
  require('./apiRoutes')(app) 
}