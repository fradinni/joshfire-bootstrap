var mongoose = require('mongoose')
  , Schema = mongoose.Schema


/**
 * User Schema
 */
module.exports = new Schema({

	// Required parameters
	name: { type: String, required: true, unique: true }
  
});
