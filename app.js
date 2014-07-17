var path = require('path');
var express = require('express');
var app = express();

var fb = require('./lib/ninebytes-fb');

app.use(express.static(path.join(__dirname, 'public')));

app.all('/', function(req, res) {
	res.send('I am alive!');
});

app.get('/verify/:userId/:authToken', function(req, res) {
	console.log(req.params);
	fb.validateUserAccessTokenAndId(req.params.authToken, req.params.userId, function(error, isValid) {
		res.json({isValid: isValid});
	});
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
