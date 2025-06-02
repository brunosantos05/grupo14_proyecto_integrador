const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const db = require("./database/models");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/userRoutes');
const mercadoLibreRouter = require('./routes/productRoutes');

const app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares de configuración
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de sesión
app.use(session({
  secret: "mensaje secreto",
  resave: false,
  saveUninitialized: false
}));

// Middleware global para mantener sesión desde cookie y pasar userLogged a views
app.use(function (req, res, next) {
  if (req.session.userLogged) {
    res.locals.userLogged = req.session.userLogged;
    return next();
  }

  if (req.cookies.userEmail) {
    db.User.findOne({ where: { email: req.cookies.userEmail } })
      .then(function(user) {
        if (user) {
          req.session.userLogged = {
            id: user.id,
            usuario: user.usuario,
            email: user.email,
            fotoPerfil: user.fotoPerfil,
          };
          res.locals.userLogged = req.session.userLogged;
        }
        return next();
      })
      .catch(function(err) {
        console.error("Error al recuperar usuario desde cookie:", err);
        return next();
      });
  } else {
    res.locals.userLogged = null;
    return next();
  }
});

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', mercadoLibreRouter);

// Catch 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
