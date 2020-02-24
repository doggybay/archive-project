const Type = require('../models/Type');

exports.getAllTypes = async (req, res) => {
  const types = await Type.query();
  res.json(types);
};

