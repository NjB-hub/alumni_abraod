const mongoose = require('mongoose');
const Profile = require('./Profile');


const expertiseSchema = mongoose.Schema({
  value: {type: String, required: true },
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: Profile, default:null },
});


module.exports = mongoose.model('Expertise', expertiseSchema);