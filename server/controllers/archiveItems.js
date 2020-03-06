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

exports.editArchiveItem = async (req, res) => {
  const archiveItem = { ...req.body };
  const pictures = archiveItem.pictures;
  const deletedPics = archiveItem.deletedPics;

  const formattedAI = {
    user_id: Number(archiveItem.user_id),
    make: archiveItem.make,
    model: archiveItem.model,
    type_id: Number(archiveItem.type_id),
    serial_num: archiveItem.serial_num,
    price: Number(archiveItem.price),
    description: archiveItem.description
  };
  
  picturesController.addPicFromUpdate(pictures, req.params.id);
  
  if (deletedPics) {
    picturesController.deletePictures(deletedPics);
  };

  const updatedAI = await ArchiveItem.query().findById(req.params.id).patch(formattedAI).returning('*').withGraphFetched('[types, pictures]');

  res.json(updatedAI)
}

exports.deleteArchiveItem = async (req, res) => {
  console.log(req.params.id)
  const deletedAI = await ArchiveItem.query().deleteById(Number(req.params.id)).returning('*');

  res.json(deletedAI);
}