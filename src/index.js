var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
//password file
var config = require('./config');


require('handlebars');

//bodyParser
app.use(bodyParser.urlencoded({extended: true}))
//mongodb
var mongo_link = "mongodb://"+config.mongodb.user_name+":"
	+config.mongodb.user_pass+"@ds151070.mlab.com:51070/startpage-test";

console.log("mongoDB link: " +mongo_link)
	

MongoClient.connect(mongo_link, (err, client) =>{
	//server credentials
	if (err) return console.log(err)
		db = client.db(config.mongodb.db_name)
	

var things = require('./things.js');

//handlebars
// path = require('path');
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
	}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
    res.render('hello');
});

app.use('/things', things);

app.listen(8080);
console.log('Running on http://localhost:8080');

})