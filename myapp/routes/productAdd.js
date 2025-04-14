const express = require('express');
const router = express.Router();
const productAddController = require('../controllers/productAddController');

router.get(`/`, productAddcontroller.index)


module.exports= router