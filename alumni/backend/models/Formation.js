const mongoose = require('mongoose');
const Profile = require('./Profile');


const formationSchema = mongoose.Schema({
  type: {type: String, required: true },
  school: {type: String, required: true },
  duration: {type:Date},
  diploma: {type: String, required:true },
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: Profile, default:null },
});


module.exports = mongoose.model('Formation', formationSchema);