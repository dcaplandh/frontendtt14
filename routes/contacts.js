var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/add', contactsController.add);
router.post('/add', contactsController.store);
router.get('/show',contactsController.show);
router.get('/search', contactsController.search);

module.exports = router;
