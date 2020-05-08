const fs = require('fs');

const controller = {
    add : function(req,res,next){
        res.render('contacts/add');
    },
    store: function(req,res,next){
        console.log(req.body);
        let usuario = {
            nombre : req.body.full_name,
            telefono: req.body.phone
        }
        let usuarios = fs.readFileSync('./data/contacts.json');
        usuarios = JSON.parse(usuarios);
        usuarios.push(usuario);
        usuarios = JSON.stringify(usuarios);
        fs.writeFileSync('./data/contacts.json',usuarios);
        
        res.redirect("/contacts/add");
    },
    show: function(req,res,next){
        let nombre = req.query.nombre;
        res.send("Estas viendo al usuario: "+nombre+" "+req.query.apellido)
    },
    search: function(req,res,next){
        res.send("Estan buscando: "+req.query.busqueda)
    }
}

module.exports = controller;