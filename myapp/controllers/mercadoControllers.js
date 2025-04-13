const controlador = {
    index: (req, res) => {
      res.render('index');
    },
    login: (req, res) => {
      res.render('login');
    },
    registro: (req, res) => {
      res.render('register');
    },
    productoAgregar: (req, res) => {
      res.render('product-add');
    },
    productoDetalle: (req, res) => {
      res.render('product');
    },
    perfil: (req, res) => {
      res.render('profile');
    },
    resultadosBusqueda: (req, res) => {
      res.render('search-results');
    }
  };
  
  module.exports = controlador;
  