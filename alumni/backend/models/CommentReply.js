const mongoose = require('mongoose');
const Comment = require('./Comment');


const commentReplySchema = mongoose.Schema({
  commentParent_id: { type: mongoose.Schema.Types.ObjectId, ref: Comment, default: null },
  commentSon_id: { type: mongoose.Schema.Types.ObjectId, ref: Comment, default: null },
});


module.exports = mongoose.model('CommentReply', commentReplySchema);