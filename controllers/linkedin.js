module.exports = {
    renderlinkedIn: function(req, res) {
      res.render("linkedin", {
        msg: "Welcome! this is data being passed into the render method!"
      });
    }
  };
  