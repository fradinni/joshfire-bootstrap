///////////////////////////////////////////////////////////////////////////////
//
// Session Middleware
// ----------------------------------------------------------------------------
//
// Author: Nicolas FRADIN
//

var mongoose = require('mongoose')
  , _ = require('underscore');

console.log("[Middleware] Loading session");

//
// Export
//
module.exports = function(req, res, next) {
	if(req.session.user) {
		console.log("[Middleware] Check user session...");
	} else {
		console.log("[Middleware] No user session to check.");
	}
	next();
}