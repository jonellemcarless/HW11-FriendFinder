var path = require('path');

module.exports = function(app){

  //if app crashes this is why
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

	app.get('/survey', function(req, res){
		
		res.sendFile(path.join(__dirname + '../public/survey1.html'));

	});

	// app.use(function(req, res){
	// 	res.sendFile(path.join(__dirname + '../public/home.html'));
	// });

}