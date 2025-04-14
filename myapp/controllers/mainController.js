const camisetas = require('../db/products');

const mainController = {
  index: function (req, res) {
    return res.render("index", {productos:camisetas.productos});
  }
};

module.exports = mainController;