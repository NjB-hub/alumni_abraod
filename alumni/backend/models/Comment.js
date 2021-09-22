const mongoose = require('mongoose');
const Post = require('./Post');
const User = require('./User');


const commentSchema = mongoose.Schema({
  creationDate: { type: Date },
  value: {type: String, required: true },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: Post, default: null },
  usercom_id: { type: mongoose.Schema.Types.ObjectId, ref: User, default: null },
});


module.exports = mongoose.model('Comment', commentSchema);