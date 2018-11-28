module.exports = {
    renderLibrary: function(req, res) {
      res.render("index", {
        msg: "Welcome! this is data being passed into the render method!"
      });
    }
  };
  