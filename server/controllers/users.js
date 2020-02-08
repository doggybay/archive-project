const User = require('../models/User');
const addressController = require('./address')

exports.getAllUsers = async (req, res) => {
  const users = await User.query().withGraphFetched('address');
  res.json(users);
};

exports.getOneUser = async (req, res) => {
  const user = await User.query()
    .findById(req.params.id)
    .withGraphFetched('[address]');
  
  res.json(user);
};

exports.addUser = async (req, res) => {
  
  const user = { ...req.body }

  const addressInBody = user.address[0]

  const formattedUser = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  };

  const newUser = await User.query()
    .insert(formattedUser)
    .returning('*');
  
  addressController.addNewAddress(addressInBody, newUser.id)

  const formattedNewUser = await User.query().findById(newUser.id).withGraphFetched('[address]');
  
  res.json(formattedNewUser);
};

exports.updateUser = async (req, res) => {
  const user = { ...req.body };

  const addressToUpdate = user.address[0];

  const userToUpdate = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  };

  addressController.updateAddress(addressToUpdate)

  const updatedUser = await User.query().findById(req.params.id).patch(userToUpdate).returning('*').withGraphFetched('[address]');

  res.json(updatedUser);
};

exports.removeUser = async (req, res) => {
  const deletedAddress = await addressController.deleteAddress(req.params.id)
  const deletedUser = await User.query()
    .deleteById(req.params.id)
    .returning('*');

  const formattedUser = { ...deletedUser, address:  [...deletedAddress ]}
  res.json(formattedUser);
};
