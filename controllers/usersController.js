const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

const controller = {
    register :function(req, res, next) {
        //console.log(bcrypt.hashSync(req.body.password,10));
        //console.log(req.files[0].filename);
        //console.log(req.body);
        let errors = validationResult(req);
        console.log(errors);  
        if(!errors.isEmpty()){
          res.render('register',{errors: errors.errors,datos:req.body});
        }else{
          res.send("usuario registrado");
        }
      },
      showProfile: function(req,res,next){
        //LEER:
        let usuario = req.session.nombre;
        let rol = req.cookies.rol;
        
        res.send("Estoy en el perfil de "+usuario+ "y soy "+rol);
      },
      login: function(req,res,next){

        //PRENDER LA SESION DEL USUARIO
        //ESCRIBIR:
        req.session.nombre = "Michelle";
        req.session.id = 7;
        req.session.email = "mich@dh.com";
        //COOKIE
        let ms = 3600000 * 24 *365 * 10;
        res.cookie('rol','docente',{maxAge:ms});
        res.redirect("/users/perfil");
      },
      logout: function(req,res,next){
        //cerrar sesión
        req.session.destroy();
        res.redirect("/users/login");
      }

}

module.exports = controller;