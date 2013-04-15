define([
	'joshlib!vendor/backbone',
	'joshlib!vendor/underscore',
	'joshlib!utils/dollar',
	'joshlib!model',
	'joshlib!collection'
],function(Backbone, _, $, Model, Collection) {

	var JnuineModel = Model.extend({
		idAttribute: "_id"

		// API URL for Jnuine model
	  ,	urlRoot: '/api/jnuine'
		
	});

	var JnuineCollection = Backbone.Collection.extend({

		// API URL for Jnuine Collection
		url: '/api/jnuines'
	  ,	model: JnuineModel

	});

	return {


		/**
		 *
		 */
		model: JnuineModel,



		/**
		 *
		 */
		collection: JnuineCollection

	}
});