const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: [String],
    required: true,
  },
  count: Number,
  status: {
    type: Number,
    enum: [1, 2, 3] // ['pending', 'accept', 'reject']
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps : true }) 

const Product = mongoose.model('Product', productSchema);
module.exports = Product;