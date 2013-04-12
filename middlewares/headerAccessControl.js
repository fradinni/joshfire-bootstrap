console.log("[Middleware] Loading headerAccessControl");

module.exports = function(req, res, next) {
	//res.header('Access-Control-Allow-Origin', 'http://www.jnuine.com');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
	next();
}