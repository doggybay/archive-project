import connectionHandler from "../../../server/db/connection-handler";
import ArchiveItem from "../../../server/models/ArchiveItem";
import * as picturesController from "../../../server/controllers/pictures";

const archiveItemHandler = async (req, res) => {
  if (req.method === "GET") {
    const archiveItem = await ArchiveItem.query()
      .findById(req.query.id)
      .withGraphFetched("[types, pictures]");

    res.json(archiveItem);

  } else if (req.method === "PATCH") {
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
      description: archiveItem.description,
    };

    picturesController.addPicFromUpdate(pictures, req.query.id);

    if (deletedPics) {
      picturesController.deletePictures(deletedPics);
    }

    const updatedAI = await ArchiveItem.query()
      .findById(req.query.id)
      .patch(formattedAI)
      .returning("*")
      .withGraphFetched("[types, pictures]");

    res.json(updatedAI);

  } else if (req.method === "DELETE") {
    const deletedAI = await ArchiveItem.query()
      .deleteById(Number(req.query.id))
      .returning("*");

    res.json(deletedAI);
  }


};

export default connectionHandler()(archiveItemHandler);
