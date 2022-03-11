var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
