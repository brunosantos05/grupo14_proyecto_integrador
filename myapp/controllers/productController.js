const products = require('../db/products');

const productoController = {
  detalle: function (req,res) {
    let id = req.params.id
    let producto = products.productos[id];
    return res.render('product', {producto:producto});
  }
};


module.exports = productoController;