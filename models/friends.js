// *********************************************************************************
// CHARACTER.JS - THIS FILE CREATES A MODELED OF INDIVIDUAL CHARACTERS IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var friend = sequelize.define("friends", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	routeName: {
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
	},
	photo: {
		type: Sequelize.STRING,
	},
	answer1: {
		type: Sequelize.INTEGER,
	},
	answer2: {
		type: Sequelize.INTEGER,
	},
	answer3: {
		type: Sequelize.INTEGER,
	},
	answer4: {
		type: Sequelize.INTEGER,
	},
	answer5: {
		type: Sequelize.INTEGER,
	},
	answer6: {
		type: Sequelize.INTEGER,
	},
	answer7: {
		type: Sequelize.INTEGER,
	},
	answer8: {
		type: Sequelize.INTEGER,
	},
	answer9: {
		type: Sequelize.INTEGER,
	},
	answer10: {
		type: Sequelize.INTEGER,
	}
});

	
// Syncs with DB
friend.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = friend;