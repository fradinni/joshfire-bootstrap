var mongoose = require('mongoose')
  , User = require('./user')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId



/**
 * Jnuine Schema
 */
var JnuineSchema = new Schema({

  // Basic Jnuine informations
    name: { type: String, required: true, index: true }
  , owner: { type: ObjectId, required: true, index: true }

  // Extended Jnuine informations
  , contributors: [ObjectId]

  // Dates
  , date_reated: { type: Date, default: Date.now }
  , last_updated: { type: Date, default: Date.now }

});



/**
 * Middlewares
 */
JnuineSchema.pre('save', function(next) {
  this.set('last_updated', Date.now );
  next();
});



/**
 * Export Schema
 */
module.exports = JnuineSchema;
