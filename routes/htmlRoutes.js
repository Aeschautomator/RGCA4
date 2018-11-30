var homeController = require("../controllers/home");
var linkedinController = require("../controllers/linkedin");
var libraryController = require("../controllers/library");
var playerController = require("../controllers/player");
var authController = require("../controllers/authcontroller")
module.exports = function(app) {
  app.get("/index", homeController.renderHome);

  app.get("/linkedin", linkedinController.renderlinkedin);

  app.get("/library", libraryController.renderLibrary);

  app.get("/player", playerController.renderplayer);

  app.get('/', authController.rendersignin);
};

