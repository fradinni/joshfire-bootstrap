var _ = require('underscore');


/**
 * Initialize routes for a specific module
 *
 * @param {app} Application
 * @param {module_name} Name or path of module
 * @param {apiRoute} Indicates if routes are related to API
 *
 */
function initRoutes(app, module_name, apiRoute) {
	var routes = require('./api/'+module_name);
	_.each(routes, function(route) {
		switch(route.method) {
			case "GET":
				app.get((apiRoute ? '/api' : '') + route.path, route.fn);
				break;

			case "PUT":
				app.put((apiRoute ? '/api' : '') + route.path, route.fn);
				break;

			case "POST":
				app.post((apiRoute ? '/api' : '') + route.path, route.fn);
				break;

			case "DELETE":
				app.del((apiRoute ? '/api' : '') + route.path, route.fn);
				break;
		}
	});
}



//
// Export routes
//
module.exports = {
	init: function(app) {

		// API Routes
		initRoutes(app, 'users', true);

		// Other routes
		
	}
}