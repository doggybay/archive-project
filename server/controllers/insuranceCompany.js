const InsuranceCompany = require('../models/InsuranceCompany');

exports.addInsComp = async (req, res) => {
  const newInsComp = { ...req.body }

  const addedInsComp = await InsuranceCompany.query().insert(newInsComp).returning('*');

  res.json(addedInsComp);
}