import connectionHandler from "../../../server/db/connection-handler";
import User from "../../../server/models/User";
import * as addressController from "../../../server/controllers/address";



const loginHandler = async (req, res) => {
  console.log("loginHandler: ", req.method);
  console.log("loginHandler: ", req.body);

  if (req.method === "POST") {
    const { email } = req.body;
    const data = await User.query().select("*").where("email", "=", email);

    console.log("loginHandler-POST: ", data);

    if (data.length > 0 && data[0].hasOwnProperty("id")) {
      const user = await User.query()
        .findById(data[0].id)
        .withGraphFetched(
          "[addresses, user_insurances.[insurance_companys], archive_items.[types, pictures]]"
        );

      res.json(user);
    } else {
      res.status(401).end(`Not Authorized`);
    }
  } else {
    res.status(404).end();
  }

  // if (req.method === "GET") {

  // } else {
  //   // Handle any other HTTP method
  // }
};

export default connectionHandler()(loginHandler);
