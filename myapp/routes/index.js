const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mercadoControllers');

// Página principal
router.get('/', controlador.index);

// Registro
router.get('/register', controlador.registro);

// Login
router.get('/login', controlador.login);

// Perfil del usuario
router.get('/profile', controlador.perfil);

// Agregar producto
router.get('/product-add', controlador.productoAgregar);

// Detalle del producto
router.get('/product', controlador.productoDetalle);

// Resultados de búsqueda
router.get('/search-results', controlador.resultadosBusqueda);

module.exports = router;
