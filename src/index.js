var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('handlebars');

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