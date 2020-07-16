const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  sellerID: {
    type: Object,
    required: true,
  },
  buyerID: {
    type: Object,
    required: true,
  },
  createdAt: Date,
  status: Boolean,
  status: {
    type: Boolean,
    enum: [1, 2, 3] // ['pending', 'accept', 'reject']
  },
})

const Transaction = mongoose.Model('Transaction', transactionSchema);
module.exports = Transaction;