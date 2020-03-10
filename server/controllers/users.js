const User = require('../models/User');
const addressController = require('./address')

exports.getAllUsers = async (req, res) => {
  const users = await User.query().withGraphFetched('[addresses, user_insurances.[insurance_companys], archive_items]');
  res.json(users);
};

exports.getOneUser = async (req, res) => {
  const user = await User.query()
    .findById(req.params.id)
    .withGraphFetched('[addresses, user_insurances.[insurance_companys], archive_items.[types, pictures]]');
  
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

  const formattedNewUser = await User.query().findById(newUser.id).withGraphFetched('[addresses]');
  
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

  const updatedUser = await User.query().findById(req.params.id).patch(userToUpdate).returning('*').withGraphFetched('[addresses, user_insurances]');

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

exports.authUser = async (req, res) => {
  const { email } = req.body
  const data = await User.query().select('*').where('email', '=', email)

  
  if (data.length > 0 && data[0].hasOwnProperty('id')) {

    const user = await User.query()
      .findById(data[0].id)
      .withGraphFetched(
        "[addresses, user_insurances.[insurance_companys], archive_items.[types, pictures]]"
    );
    console.log("user: ", user)
    
    res.json(user)
  } else {
    res.status(401).end(`Not Authorized`);
  }

}