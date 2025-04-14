const express = require('express');
const router = express.Router();
const searchController = require('../search/loginController');

router.get(`/`, loginController.index)


module.exports= router