var mongoose = require('mongoose')
  , Comment = require('./jnuine_item_comment')
  , Schema = mongoose.Schema
  , Mixed = Schema.Types.Mixed


/**
 * Jnuine Item Schema
 */
var JnuineItemSchema = new Schema({
	title: { type: String, required: true }
  , type: { type: String, enum: ["PHOTO", "NOTE"], required: true }
  , photo: Mixed
  , note: String
  , comments: [Comment]

  , date_created: { type: Date, default: Date.now}
});



/**
 * Export Schema
 */
module.exports = JnuineItemSchema;