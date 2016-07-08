var express = require('express'); // loading modules 
var app = express(); // initializing express 
var bodyParser = require('body-parser'); // loading body-parser 
var sessions = require('express-session');
var cookieParser = require('cookie-parser');

// configure app to use bodyParser() 

// this will let us get the data from a POST 
app.set('views', __dirname + '/views');//setting the path for the views 
app.set('view engine', 'ejs'); //setting the view engine to ejs 

app.use(express.cookieParser());
app.use(express.session({secret: 'adfasdf34efsdfs34sefsdf'}));//setting the session key 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); app.use(express.static(__dirname + '/public')); //setting path for static(images, stylesheets) 

var port = process.env.PORT || 8080; // set our port 

app.configure('development', function(){ //development-environment configurations 
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
}); 
//Start Server

app.listen(port); console.log('Express server listening on port ' + port);