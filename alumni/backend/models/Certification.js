const mongoose = require('mongoose');
const Profile = require('./Profile');


const certificationSchema = mongoose.Schema({
  enterprise: {type: String, required: true },
  expirationDate: {type:Date, required:true},
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: Profile, default:null },
});


module.exports = mongoose.model('Certification', certificationSchema);