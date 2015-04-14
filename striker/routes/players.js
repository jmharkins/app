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
  var qid = req.params.id;
  var dbq = MongoClient.connect("mongodb://localhost:27017/epldb", function(err, db) {
	if(err) { return next(err); }
		var gcollect = db.collection('games2');
		var outarray = [];
		var qresult = gcollect.find({ $or:[{'team0.id': qid}, {'team1.id': qid}] })
		  .each(function(err, item){ 
			// If the item is null then the cursor is exhausted/empty and closed
			if(item == null) {
				// send back JSON
				res.send(JSON.stringify(outarray));
				db.close();
			} else {
				var shots = item.shots;
				var fshots = filterer("team",shots,qid);
				outarray = outarray.concat(fshots)
			}
		});
	});
});

/* GET team data by ID. */
router.get('/playerlist', function(req, res, next) {
  console.log("server req")
  var qid = req.params.id;
  var dbq = MongoClient.connect("mongodb://localhost:27017/epldb", function(err, db) {
	if(err) { return next(err); }
		var gcollect = db.collection('games2');
		var qresult = gcollect.aggregate([{ $unwind : '$players' }, 
										{$project: { players: { id: '$players.id',
						 										team_id: '$players.team_id', 
						 										fullName : { $concat: [ "$players.firstName", " ", "$players.lastName" ] } 
						 									} 
													}
										},
										{$group: { _id: {"team_id": '$players.team_id', "player_id": '$players.id', "fullName": "$players.fullName"}}}
										], function(err, result) { 
											if(err) {
												res.send(JSON.stringify(error))
											} else {
												res.send(JSON.stringify(result))
											}
											db.close();
										})
	});
});

module.exports = router;
