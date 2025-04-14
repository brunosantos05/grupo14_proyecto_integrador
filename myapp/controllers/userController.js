const users = require('../db/users');
const products = require('../db/products');

const userController = {
  register: function(req, res) {
    res.render('register');
  },
  login: function(req, res) {
    res.render('login');
  },
  profile: function(req, res) {
    let usuario = users.usuario; 
    let productos = products.productos;
    return res.render('profile', { user:usuario, productos: productos});
  }
};

module.exports = userController;