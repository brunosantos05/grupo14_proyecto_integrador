const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController = {
  register: function(req, res) {
    if (req.session && req.session.userLogged) {
      return res.redirect('/profile'); // Redirección si ya está logueado
    }
    res.render('register');
  },

  create: function(req, res) {
    const username = req.body.usuario;
    const email = req.body.email;
    const password = req.body.password;
    const fechaNacimiento = req.body.fecha;
    const documento = req.body.documento;
    const foto = req.body.foto;

    // Validaciones
    if (!email || !username || !password || password.length < 3) {
      return res.send("Error: todos los campos son obligatorios y la contraseña debe tener al menos 3 caracteres.");
    }

    // verificamos si ya existe un usuario con ese email
    db.User.findOne({ where: { email: email } })
      .then(function(user) {
        if (user) {
          return res.send("Error: ese email ya está registrado.");
        }

        // Crear el usuario
        return db.User.create({
          name: username,
          email: email,
          password: bcryptjs.hashSync(password, 10),
          birthdate: fechaNacimiento,
          document: documento,
          foto: foto,
          createdAt: new Date()
        });
      })
      .then(function(usuarioCreado) {
        return res.redirect('/login');
      })
      .catch(function(error) {
        return res.send("Ocurrió un error al registrar el usuario: " + error);
      });
  },

  login: function(req, res) {
    res.render('login');
  },

  profile: function(req, res) {
    const usuario = req.session.userLogged; 
    db.Product.findAll()
      .then(function(productos) {
        res.render('profile', { user: usuario, productos: productos });
      });
  },

  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
};

module.exports = userController;
