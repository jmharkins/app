var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chart.html');
});

router.get('/player/:id', function(req, res, next) {
  res.render('chart.html');
});

module.exports = router;
