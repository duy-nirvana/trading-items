const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  productIDs: [
    mongoose.Schema.Types.ObjectId
  ],
  lovedUserIDs: [
    mongoose.Schema.Types.ObjectId
  ],
  comments: [{
    content: String,
    createdBy: mongoose.Schema.Types.ObjectId,
    deletedAt: Date,
    replyCommentID: mongoose.Schema.Types.ObjectId
  
  }],
  createdBy: mongoose.Schema.Types.ObjectId,
  deletedAt: Date,
  expiredAt: Date,
}, {timestamps : true })

const Post = mongoose.model('Post', postSchema, 'posts');
module.exports = Post;