const { Association } = require('sequelize');
const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController = {
  register: function(req, res) {
    if (req.session && req.session.userLogged) {
      return res.redirect('/users/profile');
    }
    res.render('register');
  },

  create: function(req, res) {
    const { usuario, email, password, fecha, documento, foto } = req.body;

    if (!email || !usuario || !password || password.length < 3) {
      return res.send("Error: todos los campos son obligatorios y la contraseña debe tener al menos 3 caracteres.");
    }

    db.User.findOne({ where: { email } })
      .then(user => {
        if (user) return res.send("Error: ese email ya está registrado.");

        return db.User.create({
          usuario,
          email,
          contrasenia: bcryptjs.hashSync(password, 10),
          fechaNacimiento: fecha,
          numeroDocumento: documento,
          fotoPerfil: foto
        });
      })
      .then(() => res.redirect('/users/login'))
      .catch(error => res.send("Ocurrió un error al registrar el usuario: " + error));
  },

  login: function(req, res) {
    if (req.session && req.session.userLogged) {
      return res.redirect('/users/profile');
    }
    res.render('login', { errors: [] });
  },

  loginProcess: function(req, res) {
    const { email, password } = req.body;

    db.User.findOne({ where: { email } })
      .then(user => {
        if (!user) return res.render('login', { errors: ['El email no está registrado.'] });

        if (!bcryptjs.compareSync(password, user.contrasenia)) {
          return res.render('login', { errors: ['Contraseña incorrecta.'] });
        }

        req.session.userLogged = {
          id: user.id,
          usuario: user.usuario,
          email: user.email,
          fotoPerfil: user.fotoPerfil
        };

        if (req.body.recordame) {
          res.cookie('userEmail', email, { maxAge: 60000 * 10 });
        }

        return res.redirect('/users/profile');
      })
      .catch(error => res.send('Ocurrió un error al iniciar sesión: ' + error));
  },

  profile: function(req, res) {
    id = req.params.id

    db.User.findByPk(id, {
      include: [
        {
        association: "productos"
        }
      ]

    })
    .then(function (data) {
        db.Producto.findAll({
          where: { usuario_id: data.id},
          include: [
            { association: "comentarios"}
        ]
        })
        .then(producto => {
          return res.render ("profile", { user: data, productos: producto})
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/users/login');
  }
};

module.exports = userController;
