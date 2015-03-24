var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade')
  // res.render('chart.html');
});

router.get('/player/:id', function(req, res, next) {
  // res.render('chart.html');
  res.render('partials/player.jade')
});

router.get('/partials/:name', function (req, res) {
  console.log("partial requested")
  var name = req.params.name;
  res.render('partials/' + name + ".jade");
});

module.exports = router;
