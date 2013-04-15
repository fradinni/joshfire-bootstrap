define([
	'joshlib!vendor/underscore',
	'joshlib!vendor/backbone',
	'joshlib!utils/dollar',
	'joshlib!model',
	'joshlib!collection'
],function(_, Backbone, $, Model, Collection) {
	return {


		/**
		 *
		 */
		model: Model.extend({
			
			idAttribute: "_id"

			// API URL for User model
		  ,	urlRoot: '/api/user'
			
		}),



		/**
		 *
		 */
		collection: Backbone.Collection.extend({

			// API URL for User's Collection
			url: '/api/users'

		})

	}
});