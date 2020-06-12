const middleware = {
    estaLogueado: function(req,res,next){
        next();
    },
    mostrarUsuario : function(req,res,next){
        console.log(req.query.nombre)
        if(req.query.nombre == "Gaston"){
            //
        }else{
            //
        }
        next();
    },
    auth: function(req,res,next){
        if(req.session.user){
            next();
        }else{
            res.redirect("/login");
        }
    },
    guest: function(req,res,next){
        if(!req.session.user){
            next();
        }
    },
    soloPablos: function(){
        if(req.session.user.name == "Pablo"){
            next();
        }else{
            res.redirect("/");
        }
    }
}

module.exports = middleware;