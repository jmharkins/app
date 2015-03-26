var express = require('express');
var MongoClient = require('mongodb').MongoClient
var router = express.Router();

/* GET player data by ID. */
router.get('/players/:id', function(req, res, next) {
  var tid = parseInt(req.params.id);
  var dbq = MongoClient.connect("mongodb://localhost:27017/epldb", function(err, db) {
	if(err) { return next(err); }
		var gcollect = db.collection('testData');
		var qresult = gcollect.find({'tid': tid }).nextObject(function(err,doc) {
			res.send(JSON.stringify(doc));
			db.close();
		});
	});
});

/* GET team data by ID. */
router.get('/team/:id', function(req, res, next) {
  var tid = parseInt(req.params.id);
  var dbq = MongoClient.connect("mongodb://localhost:27017/epldb", function(err, db) {
	if(err) { return next(err); }
		var gcollect = db.collection('testData');
		var qresult = gcollect.find({'tid': tid }).nextObject(function(err,doc) {
			res.send(JSON.stringify(doc));
			db.close();
		});
	});
});


module.exports = router;
