var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
//var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
//password file
var config = require('./config');
var path = require ('path');

//var Handlebars = require('handlebars');

//bodyParser
//app.use(bodyParser.urlencoded({extended: true}))

//mongodb
var mongo_link = "mongodb://"+config.mongodb.user_name+":"
	+config.mongodb.user_pass+"@ds151070.mlab.com:51070/startpage-test";

console.log("mongoDB link: " +mongo_link)	


MongoClient.connect(mongo_link, (err, client) =>{
	if (err) return console.log(err)
		db = client.db(config.mongodb.db_name)
		console.log("Connected to MongoDB")

//var things = require('./things.js');

//handlebars
// path = require('path');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
	}));
app.set('view engine', 'handlebars');

//partials
//.registerPartial("hello");


app.get('/', function (req, res) {
	//res.sendFile(path.join(__dirname + '/index.html'));
	res.render('hello');
});

app.get('/login', function(req,res){
	res.render('login');
});

//app.use('/things', things);

app.listen(8080);
console.log('Running on http://localhost:8080');

})