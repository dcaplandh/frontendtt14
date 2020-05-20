const basics = {
    saludar : function(req,res,next){
        console.log("hola");
        next();
      }
}

module.exports = basics;