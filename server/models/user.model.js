const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  deletedAt: Date,
  phone: {
    type: String,
    required: true,
  },
  address: String
}, {timestamps : true })

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;