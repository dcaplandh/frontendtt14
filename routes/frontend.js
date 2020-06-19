var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
  res.render('test');
});

router.get('/clase1/ejemplo1', function(req, res, next) {
    res.render('frontend/ejemplo1');
  });
router.get('/clasevirtual/emilia', function(req, res, next) {
  res.render('frontend/emilia');
});
router.get('/clase2/ejemplo1', function(req, res, next) {
  res.render('frontend/ejemplo2');
});
router.get('/clase2/ejemplo2', function(req, res, next) {
  res.render('frontend/ejemplo3');
});
router.get('/clase3/ejemplo4', function(req, res, next) {
  res.render('frontend/ejemplo4');
});
router.get('/clase4/bootstrap', function(req, res, next) {
  res.render('frontend/bootstrap');
});
router.get('/clase4/flexbox', function(req, res, next) {
  res.render('frontend/flexbox');
});
router.get('/js/clase1', function(req, res, next) {
  res.render('frontend/jsfront1');
});
router.get('/js/clase2', function(req, res, next) {
  res.render('frontend/jsfront2');
});
module.exports = router;
