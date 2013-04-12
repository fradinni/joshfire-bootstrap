///////////////////////////////////////////////////////////////////////////////
//
// Joshfire Framework NodeJS Bootstrap
//
// ----------------------------------------------------------------------------
// Author: 	Nicolas FRADIN
// Release: 2.0.0 
// Date: 	10/04/2013
//

console.log('--------------------------------------------------');
console.log("- Starting Backend...");
console.log('--------------------------------------------------');

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , _ = require('underscore')
  , app = express();


//
// Set application variables
//
app.set('port', process.env.PORT || 3000);


// 
// Middlewares
//
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('=["°_-é&§765hjsgqsd*%£+/.?"oo||Ô¥‰Ó')); // Secret key
app.use(express.session());

app.use(require('./middlewares/headerAccessControl'));
app.use(require('./middlewares/session'));


//
// Directory to serve static
//
app.use(express.static(path.join(__dirname, 'www')));


//
// Requirements for Development ENV
//
console.log(" -> Environment : " + app.get('env'));
app.configure('development', function() {
	app.use(express.errorHandler());
});


//
// Define API routes
// 
app.get('/api/test', function(req, res, next) {
	res.send(200, "API is alive ;)");
});


//
// Connect to database
//
mongoose.connect(process.env.MONGO_URL);


//
// Start listening...
//
http.createServer(app).listen(app.get('port'), function(){
  console.log("\n[Started] Backend is listening on " + app.get('port'));
});
