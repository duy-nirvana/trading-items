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
  createdAt: {timestamps : true },
  updatedAt: {timestamps : true },
  count: Number,
  status: {
    type: Number,
    enum: [1, 2, 3] // ['pending', 'accept', 'reject']
  }
}) 

const Product = mongoose.model('Product', productSchema, 'products');
module.exports = Product;