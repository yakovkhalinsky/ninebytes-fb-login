var path = require('path');
var express = require('express');
var app = express();

var fb = require('ninebytes-node-fb-login');

app.use(express.static(path.join(__dirname, 'public')));

app.all('/', function(req, res) {
	res.send('I am alive!');
});

// Your apps token, can be obtained from: https://developers.facebook.com/tools/accesstoken/
// (After you have setup your app in your Facebook developer account)

var APP_TOKEN = '806466532750804|XBox3a2i1aS9KnmZAidR3nhevms';

app.get('/verify/:userId/:authToken', function(req, res) {
	fb.validateUserAccessTokenAndId(APP_TOKEN, req.params.authToken, req.params.userId, function(error, response) {
        console.log(error, response);
		res.json({isValid: !error && response.isValid ? true : false});
	});
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
