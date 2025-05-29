var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoutes'); // ← nombre corregido
var mercadoLibreRouter = require('./routes/productRoutes'); // ← nombre corregido
const db = require("./database/models");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "mensaje secreto",
  resave: false,
  saveUninitialized: true
}));

// Middleware para pasar el usuario a las vistas si está en sesión
app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  }
  return next();
});

// Middleware para mantener la sesión si hay una cookie
app.use(function (req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {
    let idDeLaCookie = req.cookies.userId;
    db.User.findByPk(idDeLaCookie)
      .then(function (user) {
        req.session.user = user;
        res.locals.user = user;
        return next();
      })
      .catch(function (err) {
        console.log("error en cookies", err);
        return next();
      });
  } else {
    return next();
  }
});

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bears', mercadoLibreRouter);

// Catch 404 and forward to error handler
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
