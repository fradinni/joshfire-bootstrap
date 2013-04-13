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
  , sequence = require('sequence').create()
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
app.use(app.routes);

app.use(require('./middlewares/headerAccessControl'));
app.use(require('./middlewares/session'));


//
// Directory to serve
//
app.use(express.static(path.join(__dirname, 'www')));


//
// Requirements for Development ENV
//
console.log(" -> Environment : " + app.get('env'));
app.configure('development', function() {
	app.use(express.errorHandler());
});



///////////////////////////////////////////////////////////////////////////////


//
// Connect to database
//
mongoose.connect(process.env.MONGO_URL);


// Import mongoose models
var Models = require('./db/models')(mongoose);


//
// Check if user's roles exists
//
var roles = ["ADMIN", "USER"];

_.each(roles, function(role, index) {
	Models.Role.findOne({name: role}, function(err, doc) {
		if(err) {
			console.log('Unable to find role: ' + role);
			return;
		}

		if(doc) {
			console.log(" -> Role already exists: " + role);
		} else {
			console.log(" -> Create role: " + role);
			new Models.Role({name: role}).save();
		}
	});
});


//
// Define API routes
// 
console.log('[API] Defining routes');
require('./routes').init(app);


//
// Start listening...
//
http.createServer(app).listen(app.get('port'), function(){
  console.log("\n[Started] Backend is listening on " + app.get('port'));
});
