// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // contact route loads contact.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // sell route loads sell.html
  app.get("/sell", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sell.html"));
  });

  // authors route loads shop.html
  app.get("/shop", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shop.html"));
  });
};
