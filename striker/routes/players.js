var express = require('express');
var MongoClient = require('mongodb').MongoClient
var router = express.Router();

var filterer = function(type, arr, id) {
	var f;
	if (type === "team") {
		f = arr.filter(function(d) { return d.team_id === id && d.type !== "blocked" && d.is_own !== "yes"  && d.is_penalty !== 1 })
	} else if (type === "player") {
		f = arr.filter(function(d) {return d.player_id === id && d.type !== "blocked" && d.is_own !== "yes"  && d.is_penalty !== 1})
	}
	return f
}

/* GET player data by ID. */
router.get('/players/:id', function(req, res, next) {
  var qid = req.params.id;
  var dbq = MongoClient.connect("mongodb://localhost:27017/epldb", function(err, db) {
	if(err) { return next(err); }
		var gcollect = db.collection('games2');
		var outarray = [];
		var arsshots = gcollect.find({'players.id': qid},{fields: {shots: 1, _id: 0}})
		  .each(function(err, item){ 
			// If the item is null then the cursor is exhausted/empty and closed
			if(item == null) {
				// send back JSON
				res.send(JSON.stringify(outarray));
				db.close();
			} else {
				var shots = item.shots;
				var fshots = filterer("player",shots,qid);
				outarray = outarray.concat(fshots)
			}
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
