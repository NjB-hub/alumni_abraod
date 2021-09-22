const mongoose = require('mongoose');
const Post = require('./Post');
const Schema = mongoose.Schema;


const eventSchema = mongoose.Schema({
  dateEvent: { type: Date, required: true },
  post_id: { type: Schema.Types.ObjectId, ref: Post, default:null },

});


module.exports = mongoose.model('Event', eventSchema);