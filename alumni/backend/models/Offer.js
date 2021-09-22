const mongoose = require('mongoose');
const Post = require('./Post');
const Schema = mongoose.Schema;


const offerSchema = mongoose.Schema({
  Enterprise: { type: String, required: true },
  post_id: { type: Schema.Types.ObjectId, ref: Post, default:null },
});


module.exports = mongoose.model('Offer', offerSchema);