const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;


const profileSchema = mongoose.Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  gender: {type: String, required: true},
  phone: {type: String, required: true},
  location: {type: String, required: true},
  photo:
    {
        data: Buffer,
        contentType: String,
    },
  profession: {type: String, required: true},
  description: {type: String},
  user_id: { type: Schema.Types.ObjectId, ref: User, default:null },

});


module.exports = mongoose.model('Profile', profileSchema);