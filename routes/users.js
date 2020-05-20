var express = require('express');
var router = express.Router();
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const usersMiddleware = require('../middlewares/users')

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
router.post('/register', [
	check('full_name').isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
	check('email').isEmail().withMessage("Email inválido"),
	check('password').isLength({min:6}).withMessage("La contraseña debe tener al menos 6 caracteres")
] , usersController.register);

router.get('/perfil',usersMiddleware.mostrarUsuario,usersController.showProfile);

module.exports = router;
