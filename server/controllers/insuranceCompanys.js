const InsuranceCompany = require('../models/InsuranceCompany');

exports.getAllInsCompanys = async (req, res) => {
  const InsComps = await InsuranceCompany.query();

  res.json(InsComps);
}


exports.addInsCompany = async (req, res) => {
  const newInsComp = { ...req.body }

  const addedInsComp = await InsuranceCompany.query().insert(newInsComp).returning('*');

  res.json(addedInsComp);
}