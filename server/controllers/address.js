const Address = require('../models/Address');

exports.addNewAddress = async (address, userId ) => {

  const formattedAddress = {
    user_id: userId,
    stAddress: address.stAddress,
    optAddress: address.optAddress,
    city: address.city,
    state: address.state,
    zipCode: address.zipCode
  };
  const newAddress = await Address.query()
    .insert(formattedAddress)
    .returning('*');
  
  return newAddress
}

exports.updateAddress = async (address) => {

  const formattedAddress = {
    stAddress: address.stAddress,
    optAddress: address.optAddress,
    city: address.city,
    state: address.state,
    zipCode: address.zipCode
  };

  // TODO
  // find by needs to be updated to address.user_id after correcting the db due to type error
  const updatedAddress = await Address.query().findById(address.user_id).patch(formattedAddress).returning('*');

  return updatedAddress
}

exports.deleteAddress = async (id) => {
  const address = await Address.query().select('user_id').where('address.user_id', '=', id).del().returning('*')

  
  return address;
}