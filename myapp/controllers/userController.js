const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController = {
  register: function(req, res) {
    if (req.session && req.session.userLogged) {
      return res.redirect('/users/profile'); // Redirige si ya está logueado
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

    if (!email || !username || !password || password.length < 3) {
      return res.send("Error: todos los campos son obligatorios y la contraseña debe tener al menos 3 caracteres.");
    }

    db.User.findOne({ where: { email: email } })
      .then(function(user) {
        if (user) {
          return res.send("Error: ese email ya está registrado.");
        }

        return db.User.create({
          usuario: username,
          email: email,
          contrasenia: bcryptjs.hashSync(password, 10),
          fechaNacimiento: fechaNacimiento,
          numeroDocumento: documento,
          fotoPerfil: foto,
        });
      })
      .then(function(usuarioCreado) {
        return res.redirect('/users/login');
      })
      .catch(function(error) {
        return res.send("Ocurrió un error al registrar el usuario: " + error);
      });
  },

  login: function (req, res) {
    if (req.session && req.session.userLogged) {
      return res.redirect('/users/profile');
    }
    res.render('login', { errors: [] });
  },

  loginProcess: function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    db.User.findOne({ where: { email: email } })
      .then(function (user) {
        if (!user) {
          return res.render('login', { errors: ['El email no está registrado.'] });
        }

        if (!bcryptjs.compareSync(password, user.contrasenia)) {
          return res.render('login', { errors: ['Contraseña incorrecta.'] });
        }

        // Guardamos datos útiles en sesión (evitamos guardar todo el objeto user)
        req.session.userLogged = {
          id: user.id,
          usuario: user.usuario,
          email: user.email,
          fotoPerfil: user.fotoPerfil,
        };

        if (req.body.recordame) {
          res.cookie('userEmail', email, { maxAge: 60000 * 10 });
        }

        return res.redirect('/users/profile');
      })
      .catch(function (error) {
        res.send('Ocurrió un error al iniciar sesión: ' + error);
      });
  },

  profile: function(req, res) {
  console.log(req.session);
  const usuario = req.session.userLogged;
  if (!usuario) {
    return res.redirect('/');
  }

  db.Producto.findAll({
  include: [{
    model: db.Comentario,
    as: 'comentarios',
    attributes: ['id', 'nombreUsuario', 'texto', 'imagenDePerfil']  // datos de la DB
  }]
})
.then(function(productos) {
  res.render('profile', { user: req.session.userLogged, productos });
})
.catch(function(error) {
  res.send("Error al cargar productos: " + error);
});
  },


  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/users/login');
  }
};

module.exports = userController;
