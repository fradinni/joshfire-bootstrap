var _ = require('underscore')
   , mongoose = require('mongoose')
   , Models = require('../db/models')(mongoose);


///////////////////////////////////////////////////////////////////////////////
// Basic CRUD Oprations for JNUINES
//


/**
 * Add JNUINE 
 */
function jnuine_add(req, res, next) {
   var jnuineParams = req.body;
   var jnuine = new Models.Jnuine(jnuineParams);
   jnuine.save(function(err, savedJnuine) {
      if(err) res.send(500, err);
      else res.send(200, savedJnuine); 
   });
}


/**
 * Get JNUINE
 */
function jnuine_get(req, res, next) {
   var jnuineId = req.params.id;
   Models.Jnuine.findOne({_id: jnuineId}, function(err, jnuine) {
      if(err) res.send(500, err);
      else res.send(200, jnuine);
   });
}



/**
 * Update JNUINE
 */
function jnuine_update(req, res, next) {
	var jnuineId = req.params.id;
	var jnuineParams = req.body;

	Models.Jnuine.update({_id: jnuineId}, jnuineParams, function(err, updatedJnuine) {
		if(err) res.send(503, err);
		console.log(updatedJnuine);
		res.send(200, updatedJnuine);
	});
}



/**
 * Delete JNUINE
 */
 function jnuine_delete(req, res, next) {
 	var jnuineId = req.params.id;
 	Models.Jnuine.remove({_id: jnuineId}, function(err, data) {
 		if(err) res.send(503, err);
 		res.send(200, data);
 	})
 }



/**
 * Get JNUINE list
 */
function jnuines_list(req, res, next) {

	// Query database to get all jnuines
	Models.Jnuine.find({}, function(err, jnuines) {
		if(err) res.send(503, err);

		// Send jnuines list to client
		res.send(200, jnuines);
	});
	
}




//
// Export routes
//
module.exports = [
	{	
	   path: "/jnuine"
	   ,method: 'POST'
	   ,fn: jnuine_add
	   ,auth: true
	},
	{
		path: "/jnuine/:id"
	   ,method: "GET"
	   ,fn: jnuine_get
	   ,auth: true
	},
	{
		path: "/jnuine/:id"
	   ,method: "PUT"
	   ,fn: jnuine_update
	   ,auth: true
	},
	{
		path: "/jnuine/:id"
	   ,method: "DELETE"
	   ,fn: jnuine_delete
	   ,auth: true
	},
	{
		path: "/jnuines"
	   ,method: "GET"
	   ,fn: jnuines_list
	   ,auth: true
	}
]
