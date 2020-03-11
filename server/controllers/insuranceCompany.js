const InsuranceCompany = require('../models/InsuranceCompany');

exports.getAllInsComp = async (req, res) => {
  const InsComps = await InsuranceCompany.query();

  res.json(InsComps);
}


exports.addInsComp = async (req, res) => {
  const newInsComp = { ...req.body }

  const addedInsComp = await InsuranceCompany.query().insert(newInsComp).returning('*');

  res.json(addedInsComp);
}