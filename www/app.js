/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2013, Joshfire, licensed under an MIT license
 * http://framework.joshfire.com/license
 */

define([
  'joshlib!utils/dollar'
], function ($) {
	
	/**
	 * Application ENTRY POINT
	 *
	 */
	var initialize = function() {
		console.log('APPLICATION initialized !');
	}
	

	// Exposed methods
	return {
		initialize: initialize
	}
});
