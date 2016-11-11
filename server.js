var express = require('express');
// create express app
var app = express();
var PORT = process.env.PORT || 3000;
// create endpoint
var middleware = require('./middleware.js');

// commonly use for logging
app.use(middleware.logger);

// should be on top
// ordering is important
// app.use will add for every page that's why it logs every time
//app.use(middleware.requireAuthentication);

// to add middleware for specific endpoint at it as second argument
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us!');
});

// this folder will be the local root folder
// will use a folder for references like pages 
// __dirname is a global like var for current directory with full path
app.use(express.static(__dirname + '/public'));



// listen to a particular port 
app.listen(PORT, function () {
	// this will run before server started
	console.log('Express server started on port ' + PORT +'!');

}); // port 3000
