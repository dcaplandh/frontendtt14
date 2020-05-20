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
        res.send("Estoy en el perfil")
      }
}

module.exports = controller;