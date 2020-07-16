const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  productIDs: Array,
  lovedUserIDs: Array,
  comments: {
    content: String,
    createdBy: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    replyCommentID: Array,
  },
  createdAt: Date,
  createdBy: String,
  updatedAt: Date,
  deletedAt: Date,
  expiratedAt: Date,
})

const Post = mongoose.Model('Post', postSchema);
module.exports = Post;