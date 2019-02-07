var path = require('path');
// var allFriends 		= require('../data/friends.js');
var friend = require('../model/friends.js');


module.exports = function(app){

app.get('/api/survey', function(req, res){

	friend.findAll({})
		.then(function(result){
			res.json(result);
				})	
	});

app.post('/api/survey', function(req, res){

	var newFriend = req.body;
	var routeName = newFriend.name.replace(/\s+/g, '').toLowerCase();



	friend.create({
		routeName: routeName,
		name: newFriend.name,
		photo: newFriend.photo,
		answer1: newFriend.answers[0],
		answer2: newFriend.answers[1],
		answer3: newFriend.answers[2],
		answer4: newFriend.answers[3],
		answer5: newFriend.answers[4],
		answer6: newFriend.answers[5],
		answer7: newFriend.answers[6],
		answer8: newFriend.answers[7],
		answer9: newFriend.answers[8],
		answer10: newFriend.answers[9]
	});


	// allFriends.push(newFriend);

	});
}