const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');


const postSchema = mongoose.Schema({
  creationDate: { type: Date, default: Date.now },
  photo:
    {
        data: Buffer,
        contentType: String,
    },

   description: { type: String }, 
   category: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: User, default: null },
});


module.exports = mongoose.model('Post', postSchema);