import connectionHandler from '../../../server/db/connection-handler';
import User from '../../../server/models/User';
import * as addressController from "../../../server/controllers/address";

const userHandler = async (req, res) => {

  if (req.method === "GET") {
    
    const user = await User.query()
      .findById(req.query.id)
      .withGraphFetched(
        "[addresses, user_insurances.[insurance_companys], archive_items.[types, pictures]]"
      );
    
    res.json(user);
  } else if (req.method === "PATCH") {
    const user = { ...req.body };
    
    const addressToUpdate = user.address[0];

    const userToUpdate = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
    };

    addressController.updateAddress(addressToUpdate);

    const updatedUser = await User.query()
      .findById(req.query.id)
      .patch(userToUpdate)
      .returning("*")
      .withGraphFetched("[addresses, user_insurances]");

    res.json(updatedUser);
  } else if (req.method === "DELETE") {

    const deletedAddress = await addressController.deleteAddress(req.query.id);

    const deletedUser = await User.query()
      .deleteById(req.query.id)
      .returning("*");

    const formattedUser = { ...deletedUser, address: [...deletedAddress] };

    res.json(formattedUser);
  }
  

  // if (req.method === "GET") {
    
    
  // } else {
  //   // Handle any other HTTP method
  // }
}

export default connectionHandler()(userHandler);