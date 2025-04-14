const camisetas = require('../db/products');

const busquedaControllers =  {
  busqueda: function(req, res) {
    const requerimiento = req.query.search;
    const productos = camisetas.productos
    res.render('search-results', {productos:productos});
  }
};

module.exports = busquedaControllers;