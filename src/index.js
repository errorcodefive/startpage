var express = require('express');

var app = express();

var ejs = require('ejs');

var bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	//res.sendFile(path.join(__dirname + '/index.html'));
	res.render('pages/main');
});

//test-getting from ejs bookmarks form
app.post('/add-bookmark', function(req, res){
	bookmark_in = req.body
	console.log(bookmark_in)
	res.render('partials/bookmarks_list', { bookmarks: bookmark_in});
});


//app.use('/things', things);

app.listen(8080);
console.log('Running on http://localhost:8080');

})