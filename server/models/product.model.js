const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  createdAt: Date,
  updatedAt: Date,
  count: Number,
}) 

const Product = mongoose.Model('Product', productSchema);
module.exports = Product;