const db = require('../database/models');

const controller = {
    create: (req,res,next) => {
        res.render('movies/create');
    },
    store: (req,res,next) => {
        db.Movie.create(req.body)
        .then(movie=>{
            console.log("NUEVA PELI ============")
            console.log(movie);
        })
        .catch(error=>{
            console.log(error)
        });
        /*db.Movie.create({
            title:req.body.title,
            release_date:req.body.release_date...
            avatar : "silueta.png"
        })*/
        res.redirect("/database/create");
    },
    edit: (req,res,next) => {
        //TOMAR LA PELICULA
        let peliId = req.params.id;
        db.Movie.findByPk(peliId,{include:["genero","actores"]})
        .then(movie=>{
            console.log(movie);
            res.render("movies/edit",{movie});
        })
        .catch(error=>{
            console.log(error);
        });
    },
    update: (req,res,next) => {
        db.Movie.update({
            title: req.body.title,
            length:req.body.length,
            genre_id: req.body.genre_id,
            awards: req.body.awards,
            rating:req.body.rating
        },{
            where:{
                id:req.params.id
            }
        })
        .then(movie=>{
            res.redirect("/database/edit/"+req.params.id)
        })
        .catch(error=>{
            console.log(error)
        });
    },
    destroy: (req,res,next) => {
        db.Movie.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(data=>{
            res.send("pelicula eliminada")
        });
    }
}

module.exports = controller;