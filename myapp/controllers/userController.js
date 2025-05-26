const users = require('../db/users');
const products = require('../db/products');
let bcryptjs = require("bcryptjs");

const userController = {
  register: function(req, res) {
    res.render('register');
  },
  create: function(req, res) {
        let username = req.body.usuario;
        let email = req.body.email;
        let password = req.body.password;

        let usuario = {
            name: username,
            email: email,
            password: bcryptjs.hashSync(password, 10)
        };

        db.User.create(usuario)
            .then(function(results) {
                return res.redirect("/");
            })
            .catch(function(error) {
                return res.send(error);
            });
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