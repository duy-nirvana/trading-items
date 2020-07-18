const User = require('../models/user.model');

module.exports.index = async (req, res) => {
  const users = await User.find();
  res.json(users);
}

module.exports.getByID = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  
  res.json(user);
}

module.exports.getListByName = async (req, res) => {
  const q = req.query.q;
  const users = await User.find();
  const matchedUsers = users.filter(user => {
    return user.displayName.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  })

  res.json(matchedUsers);
}

module.exports.create = async (req, res) => {
  User.create(req.body);
}

module.exports.update = async (req, res) => {
  const id = req.params.id;
  const updatedUser = await User.findByIdAndUpdate(id);

  User.save(updatedUser);
}

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  const deletedUser = await User.findByIdAndDelete(id);

  User.save();
}