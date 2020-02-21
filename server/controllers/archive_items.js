const ArchiveItem = require('../models/ArchiveItem');


exports.getAllArchiveItems = async (req, res) => {
  const archiveItems = await ArchiveItem.query().withGraphFetched('[types, pictures]');

  res.json(archiveItems);
}

exports.getOneArchiveItem = async (req, res) => {
  const archiveItem = await ArchiveItem.query()
    .findById(req.params.id)
    .withGraphFetched('[types, pictures]');
  
  res.json(archiveItem);
};