var _ = require('underscore');



var models = {
	role: require('./role')
  ,	user: require('./user')
}



module.exports = function(mongoose) {
	return {
	 	Role: mongoose.model('roles', models.role)
	  ,	User: mongoose.model('users', models.user)
	}
};