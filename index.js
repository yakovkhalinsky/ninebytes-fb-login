var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.all('/', function(req, res) {
	res.send('I am alive!');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
