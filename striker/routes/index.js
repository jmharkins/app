// var express = require('express');
// var router = express.Router();

/* GET home page. */
exports.index =  function(req, res) {
  res.render('index.jade')
  // res.render('chart.html');
};

exports.player = function(req, res) {
  // res.render('chart.html');
  res.render('partials/player.jade')
};

exports.partials =  function (req, res) {
  console.log("partial requested")
  var name = req.params.name;
  res.render('partials/' + name + ".jade");
};

// module.exports = router;
