var homeController = require("../controllers/home");
var linkedinController = require("../controllers/linkedin");
var libraryController = require("../controllers/library");
var playerController = require("../controllers/player");
module.exports = function(app) {
  app.get("/", homeController.renderHome);
};
// module.exports = function(app) {
//   app.get("/linkedin", linkedinController.renderlinkedIn);
// };
// module.exports = function(app) {
//   app.get("/library", libraryController.renderLibrary);
// };
// module.exports = function(app) {
//   app.get("/player", playerController.renderplayer);
// };

