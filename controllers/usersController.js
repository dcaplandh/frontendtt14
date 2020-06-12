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
      },
      log_in: function(req,res,next){
        //tomar los datos
        let userForm = req.body;
        //buscar al usuario en la base de datos, por email
        //where:{ email: req.body.email }
        //si el usuario existe
            //bcrpy hashcompare  entre user.password y req.body.password
            //si la contraseña es valida
              //chequeo si esta tocado el recordarme
              //si esta tocado
                //creo una cookie con el id o el email del usuario
              //si no esta tocado...
                //nada...
              //devuelvo user a la vista y redirijo
            //si no es valida la contraseña
              //vuelvo a la vista con un error
        //si el usuario no existe
        //redirijo a la vista donde estaba con un error

      }

}

module.exports = controller;