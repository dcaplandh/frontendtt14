var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/color',function(req,res,next){
  let color = "";
  //console.log(typeof req.cookies.bgColor);
  if(typeof req.cookies.bgColor != "undefined"){
    color = req.cookies.bgColor ;
  }else{
    color = "blue";
  }
  res.render('color',{color});
});
router.post('/color',function(req,res,next){
  let color = req.body.color;
  res.cookie('bgColor',color,{maxAge:360000000});
  res.render('verColor',{color});
});
module.exports = router;
