var express = require('express');
var router = express.Router();
const db = require('../database/models');
const sequelize = db.sequelize;
const moviesController = require('../controllers/moviesController')

/* GET home page. */
router.get('/uno', function(req, res, next) {
  sequelize.query("SELECT * FROM genres")
  .then(function(generos){
      generos[0].forEach(genero=>{
          console.log(genero.name)
      });
    //console.log(data[0][0].name);
  })
  .catch(function(error){
    console.log(error);
  });
  res.send("query lista");
});

router.get('/dos',function(req,res,next){
    db.Movie.findAll(
        {
            where: {
                id: 7
            }
        }
    )
    .then(function(movies){
        movies.forEach(peli=>{
            console.log(peli.title)
        });
        
        res.send("listo");
    })
    .catch(function(err){
        console.log(err)
    });
    //res.send("todas las pelis");
});

router.get('/tres',function(req,res,next){
    //db.Movie.findOne({})
    db.Movie.findByPk(7)
    .then(function(movie){
        console.log(movie.title);
        res.send("listo");
    })
    .catch(function(err){
        console.log(err)
    });
    //res.send("todas las pelis");
});

//muestra el formulario de alta
router.get('/create',moviesController.create);
//guarda los datos
router.post('/create',moviesController.store);
//muestra el formulario de edicion
router.get('/edit/:id',moviesController.edit);
//actualiza los datos
router.post('/edit/:id',moviesController.update);
//borrar los datos
router.get('/delete/:id',moviesController.destroy);

module.exports = router;
