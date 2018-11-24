module.exports = {
  renderHome: function(req, res) {
    res.render("index", {
      msg: "Welcome! this is data being passed into the render method!"
    });
  }
};
module.exports = {
  renderlinkedIn: function(req, res) {
    res.render("linkedin", {
      msg: "Welcome! this is data being passed into the render method!"
    });
  }
};