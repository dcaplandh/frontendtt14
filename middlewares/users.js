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
    }
}

module.exports = middleware;