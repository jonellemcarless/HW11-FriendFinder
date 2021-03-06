// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Setting up express app 
var app = express();
var PORT = process.env.PORT || 3000; 


var staticContentFolder = __dirname + '/app/public';
console.log(staticContentFolder);
app.use(express.static(staticContentFolder)); 

// Data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(PORT, function(){
	console.log("App now listening on PORT: " + PORT);
});