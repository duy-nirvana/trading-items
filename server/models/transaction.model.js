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
  status: {
    type: Number,
    enum: [1, 2, 3] // ['pending', 'accept', 'reject']
  },
}, {timestamps : true })

const Transaction = mongoose.model('Transaction', transactionSchema, 'transactions');
module.exports = Transaction;