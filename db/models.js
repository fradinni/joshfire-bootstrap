//
//
//


var models = {
  	user: 					require('./models/user')
  , jnuine: 				require('./models/jnuine')
  , jnuine_item: 			require('./models/jnuine_item')
  , jnuine_item_comment: 	require('./models/jnuine_item_comment')
  //, photo: 					require('./models/photo')
}



module.exports = function(mongoose) {
	return {
	  	User: mongoose.model('users', models.user)
	  , Jnuine: mongoose.model('jnuines', models.jnuine)
	  , JnuineItem: mongoose.model('jnuine_items', models.jnuine_item)
	  , JnuineItemComment: mongoose.model('jnuine_item_comments', models.jnuine_item_comment)
	  //, Photo: mongoose.model('photo', models.photo)
	}
};