var mongoose = require('mongoose')
  , Schema = mongoose.Schema


/**
 * User Schema
 */
module.exports = new Schema({

	// Required parameters
	username: { type: String, required: true, unique: true }
  , email: { type : String, required: true, unique: true }
  , firstname: { type: String, required: true }
  ,	lastname: { type: String, required: true }
  ,	password: { type: String, required: true }

	// Optionnal parameters
  , roles: []

	// Other parameters
  , date: { type: Date, default: Date.now }
});
