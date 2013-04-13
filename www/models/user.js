define([
	'joshlib!vendor/underscore',
	'joshlib!utils/dollar',
	'joshlib!model',
	'joshlib!collection'
],function($, Model, Collection) {
	return {


		/**
		 *
		 */
		model: Model.extend({
			
			// API URL for User model
			urlRoot: '/user'
			
		}),



		/**
		 *
		 */
		collection: Collection.extend({

			// API URL for User's Collection
			url: '/users'

		})

	}
});