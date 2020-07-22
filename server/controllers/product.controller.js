const Product = require('../models/product.model');

module.exports.index = async (req, res) => {
  const products = await Product.find();
  res.json(products);
}

module.exports.getById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  res.json(product);
}