import connectionHandler from '../../../server/db/connection-handler';
import User from '../../../server/models/User';
import * as addressController from '../../../server/controllers/address';
import * as userInsurancesController from '../../../server/controllers/userInsurance';
// import * as db from '../../../server/db/db-injector'


const handler = async (req, res) => {
  
  if (req.method === "GET") {
    
    const users = await User.query().withGraphFetched(
      "[addresses, user_insurances.[insurance_companys], archive_items]"
    );
    
    res.json(users);
  } else if (req.method === "POST") {
    
    const user = { ...req.body };
    const { st_address, opt_address, city, state, zip_code } = user;
    const addressInBody = {
      st_address,
      opt_address,
      city,
      state,
      zip_code: Number(zip_code),
    };

    const formattedUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
    };

    const formattedUserInsurance = {
      ...user.user_insurances,
    };

    const newUser = await User.query().insert(formattedUser).returning("*");

    addressController.addNewAddress(addressInBody, newUser.id);

    userInsurancesController.addNewUserInsurance(
      formattedUserInsurance,
      newUser.id
    );

    const formattedNewUser = await User.query()
      .findById(newUser.id)
      .withGraphFetched("[addresses, user_insurances]");

    res.json(formattedNewUser);
  } else {
    // Handle any other HTTP method
  }
}

export default connectionHandler()(handler);