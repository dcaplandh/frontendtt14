var express = require('express');
var router = express.Router();
const path = require('path');

const multer = require('multer');
const usersController = require('../controllers/usersController')
var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'public/images/avatars');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

var upload = multer({storage:storage});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});
router.post('/register',upload.any() , usersController.register);

module.exports = router;
