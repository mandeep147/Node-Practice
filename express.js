var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
// configure app to use bodyParser()

// this will let us get the data from a POST
app.set('views', __dirname + '/views'); //setting the path for the views
app.set('view engine', 'ejs'); //setting the view engine to ejs

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port
var router = express.Router();

// respond with "Hello World!" on the homepage
router.get('/', function(req, res)
{
res.send('Hello World!');
});

app.use('/api', router);

// START THE SERVER

app.listen(port);
console.log('Express server listening on port ' + port);