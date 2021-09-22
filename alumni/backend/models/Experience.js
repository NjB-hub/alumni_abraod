const mongoose = require('mongoose');
const Profile = require('./Profile');


const experienceSchema = mongoose.Schema({
  position: {type: String, required: true },
  occupationDate: {type:Date, required:true},
  enterprise: {type: String, required: true },
  description: {type: String },
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: Profile, default:null },
});


module.exports = mongoose.model('Experience', experienceSchema);