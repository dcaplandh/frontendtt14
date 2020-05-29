var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET home page. */
router.get('/list', productsController.list);

module.exports = router;