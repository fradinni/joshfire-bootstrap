var _ = require('underscore')
  , Models = require('../db/models');



/**
 * Add USER 
 */
function user_add(req, res, next) {
	res.send(200, "Add user");
}


/**
 * Get USER infos
 */
function user_get(req, res, next) {
	res.send(200, "Get user " + req.params.id);
}


/**
 * Get USERS list
 */
function users_list(req, res, next) {
	res.send(200, "List users");
}



//
// Export routes
//
module.exports = [
	{	
	   	path: "/user"
	   ,method: 'PUT'
	   ,fn: user_add
	},
   	{
   		path: "/user/:id"
   	   ,method: "GET"
   	   ,fn: user_get
   	},
   	{
   		path: "/users"
   	   ,method: "GET"
   	   ,fn: users_list
   	}
]