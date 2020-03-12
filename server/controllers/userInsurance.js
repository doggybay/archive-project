const UserInsurance = require('../models/UserInsurance');


exports.addNewUserInsurance = async (userInsurance, userId) => {

  const formattedUserInsurance = {
    ...userInsurance,
    user_id:userId
  }

  const newUserInsurance = await UserInsurance.query().insert(formattedUserInsurance).returning('*');

  return newUserInsurance;
}