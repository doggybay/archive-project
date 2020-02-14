const ArchiveItem = require('../models/ArchiveItem');


exports.getAllArchiveItems = async (req, res) => {
  const archiveItems = await ArchiveItem.query().withGraphFetched('[types, pictures]');

  res.json(archiveItems);
}