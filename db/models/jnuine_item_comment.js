var mongoose = require('mongoose')
  , User = require('./jnuine')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId


/**
 * Jnuine Item Comment Schema
 */
var JnuineItemCommentSchema = new Schema({

	author: { type: ObjectId, required: true }
  , text: { type: String, required: true }

  , date_created: { type: Date, default: Date.now }

});


/**
 * Export Schema
 */
module.exports = JnuineItemCommentSchema;