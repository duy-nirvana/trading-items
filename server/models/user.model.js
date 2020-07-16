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
  createAt: Date,
  updatedAt: Date,
  deletedAt: Date,
  phone: {
    type: String,
    required: true,
  },
  address: String
})

const User = mongoose.Model('User', userSchema);
module.exports = User;

