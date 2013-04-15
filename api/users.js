var _ = require('underscore')
   , mongoose = require('mongoose')
   , Models = require('../db/models')(mongoose);


///////////////////////////////////////////////////////////////////////////////
// Basic CRUD Oprations for USERS
//



/**
 * Add USER 
 */
function user_add(req, res, next) {
   var userParams = req.body;
   var user = new Models.User(userParams);
   user.save(function(err, savedUser) {
      if(err) res.send(500, err);
      else res.send(200, savedUser); 
   });
}


/**
 * Get USER
 */
function user_get(req, res, next) {
   var userId = req.params.id;
   Models.User.findOne({_id: userId}, function(err, user) {
      if(err) res.send(500, err);
      else res.send(200, user);
   });
}



/**
 * Update USER
 */
function user_update(req, res, next) {
	var userId = req.params.id;
	var userParams = req.body;
	Models.User.update({_id: userId}, userParams, function(err, updatedUser) {
		if(err) res.send(503, err);
		res.send(200, updatedUser);
	});
}



/**
 * Delete USER
 */
 function user_delete(req, res, next) {
 	var userId = req.params.id;
 	Models.User.remove({_id: userId}, function(err, data) {
 		if(err) res.send(503, err);
 		res.send(200, data);
 	})
 }



/**
 * Get USERS list
 */
function users_list(req, res, next) {

	// Query database to get all users
	Models.User.find({}, function(err, users) {
		if(err) res.send(503, err);

		// Send users list to client
		res.send(200, users);
	});
}





///////////////////////////////////////////////////////////////////////////////
// Extended Oprations for USERS
//






//
// Export routes
//
module.exports = [
	{	
	   path: "/user"
	   ,method: 'POST'
	   ,fn: user_add
	   ,auth: true
	},
	{
		path: "/user/:id"
	   ,method: "GET"
	   ,fn: user_get
	   ,auth: true
	},
	{
		path: "/user/:id"
	   ,method: "POST"
	   ,fn: user_update
	   ,auth: true
	},
	{
		path: "/user/:id"
	   ,method: "DELETE"
	   ,fn: user_delete
	   ,auth: true
	},
	{
		path: "/users"
	   ,method: "GET"
	   ,fn: users_list
	   ,auth: true
	}
]