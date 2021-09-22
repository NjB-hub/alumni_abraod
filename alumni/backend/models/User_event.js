const mongoose = require('mongoose');
const Event = require('./Event');
const User = require('./User');
const Schema = mongoose.Schema;


const userEventSchema = mongoose.Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User, default:null },
  event_id: { type: Schema.Types.ObjectId, ref: Event, default:null },

});


module.exports = mongoose.model('UserEvent', userEventSchema);