var path = require('path');
// var allFriends 		= require('../data/friends.js');
var friends = require('../data/friends.js');


module.exports = function(app){

app.get('/api/friends', function(req, res){

	return res.json(friends)
	// friend.findAll({})
	// 	.then(function(result){
	// 		res.json(result);
	// 			})	
	});

app.post('/api/friends', function(req, res){

	var newFriend = req.body;
	var friendScore = newFriend.scores;
	var diffScores = [];

	for(var i=0; i<friends.length; i++) {
		diffScores[i] = checkScores(friends[i].scores,friendScore)
	}

	var index = 0;
	var value = diffScores[0]

	for(var i=0; i<10; i++) {
		if (diffScores[i] < value) {
		value = diffScores[i];
		index = i;	
		}
		} 
	
	friends.push(newFriend);
	res.json(friends[index]);
	

	});

	function checkScores (compScore, friendScore) {
		var diff = 0;
		for (var i=0; i<10; i++) {
			diff+=Math.abs(compScore[i]-friendScore[1]);
		}
		return diff;
	}
};


// var routeName = newFriend.name.replace(/\s+/g, '').toLowerCase();



	// friend.create({
	// 	routeName: routeName,
	// 	name: newFriend.name,
	// 	photo: newFriend.photo,
	// 	answer1: newFriend.answers[0],
	// 	answer2: newFriend.answers[1],
	// 	answer3: newFriend.answers[2],
	// 	answer4: newFriend.answers[3],
	// 	answer5: newFriend.answers[4],
	// 	answer6: newFriend.answers[5],
	// 	answer7: newFriend.answers[6],
	// 	answer8: newFriend.answers[7],
	// 	answer9: newFriend.answers[8],
	// 	answer10: newFriend.answers[9]
	// });


	// allFriends.push(newFriend);