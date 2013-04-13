define([
	'joshlib!vendor/underscore',
	'joshlib!utils/dollar',
	'joshlib!model',
	'joshlib!collection'
], function(_, $, Model, Collection) {
	return {


		/**
		 *
		 */
		model: Model.extend({

			// API URL for Session
			urlRoot: '/session',

			initialize: function () {
				var self = this;
				
				// Hook into jquery
				// Use withCredentials to send the server cookies
				// The server must allow this through response headers
				$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
					options.xhrFields = {
					  withCredentials: true
					};
					// If we have a csrf token send it through with the next request
					if(typeof self.get('_csrf') !== 'undefined') {
					  jqXHR.setRequestHeader('X-CSRF-Token', self.get('_csrf'));
					}
				});
			}

		}),



		/**
		 *
		 */
		collection: Collection.extend({

			url: '/sessions'

		})

	};
});