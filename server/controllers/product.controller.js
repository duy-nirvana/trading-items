const Product = require('../models/product.model');
const User = require('../models/user.model');
const Mongoose = require('mongoose');

module.exports.index = async (req, res) => {
  const match = {};
  const query = req.query;
  if (query.user) {
    match.createdBy = { $eq: Mongoose.Types.ObjectId(query.user) };
  }

  if (query.type) {
    let types = query.type.split(",");
    match.type = { $in: types };
  }

  if(query.name) {
    match.name = { $regex: new RegExp(query.name, "gi")}
  }

  const products = await Product.find(match);
  res.json(products);
}

module.exports.getById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  res.json(product);
}

module.exports.getListByUserId = async (req, res) => {
  const id = req.params.id;

  const products = await Product.find({
    createdBy: id
  })
  .populate("createdBy")

  res.json(products);
}