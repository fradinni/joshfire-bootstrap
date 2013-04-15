var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId


/**
 * USER Schema
 */
var UserSchema = new Schema({

  // Basic user's informations
    email: { type : String, required: true, unique: true, index: true, validate: /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ }
  , firstname: { type: String, required: true }
  , lastname: { type: String, required: true }
  , password: { type: String, required: true }
  , phone_number: { type: String, required: true, index: true }

  // Extended user's informations
  , other_emails: [String]
  , other_phone_numbers: [String]
  , address: {
      address1: String
    , address2: String
    , city: String
    , state: String
    , zipcode: Number
    , country: { type: String, required: true }
  }

  // User's related objects
  , roles: [{ type: String, enum: ['ADMIN', 'USER'], trim: true }]
  , contacts: [ObjectId]


  // Dates
  , last_login: { type: Date, default: Date.now }
  , date_created: { type: Date, default: Date.now }
  , last_updated: { type: Date, default: Date.now }

});



///////////////////////////////////////////////////////////////////////////////
// USER's VIRTUAL METHODS
//


/**
 * Get/Set USER's fullname
 */
UserSchema.virtual('fullname').get(function() {
  return this.firstname + " " + this.lastname;
})
//
.set(function(fullName) {
  var split = fullName.split(' ')
    , firstName = split[0]
    , lastName = split[1];

  this.set('firstname', firstName);
  this.set('lastname', lastName);
});



/**
 * Get full address
 */
UserSchema.virtual('fullname').get(function() {
  return  this.address.address1 + " " +
          this.address.address2 + " " +
          this.address.city + " " +
          this.address.state + " " +
          this.address.zipcode + " " +
          this.country;
});



///////////////////////////////////////////////////////////////////////////////


/**
 * Export Schema
 */
module.exports = UserSchema;
