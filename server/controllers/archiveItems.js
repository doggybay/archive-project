const ArchiveItem = require('../models/ArchiveItem');
const picturesController = require('./pictures')

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

exports.addArchiveItem = async (req, res) => {
  const archiveItem = { ...req.body }
  const pictures = archiveItem.pictures

  const formattedAi = {
    user_id: archiveItem.user_id,
    make: archiveItem.make,
    model: archiveItem.model,
    type_id: archiveItem.type_id,
    serial_num: archiveItem.serial_num,
    price: archiveItem.price,
    description: archiveItem.description
  };

  const newArchiveItem = await ArchiveItem.query().insert(formattedAi).returning('*');

  picturesController.addNewPicture(pictures, newArchiveItem.id);

  const newFormattedAi = await ArchiveItem.query()
    .findById(newArchiveItem.id)
    .withGraphFetched('[types, pictures]');
  
  res.json(newFormattedAi);
}