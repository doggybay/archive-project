import connectionHandler from "../../../server/db/connection-handler";
import ArchiveItem from '../../../server/models/ArchiveItem';
import * as picturesController from '../../../server/controllers/pictures'

const handler = async (req, res) => {
  if (req.method === "GET") {
    const archiveItems = await ArchiveItem.query().withGraphFetched(
      "[types, pictures]"
    );

    res.json(archiveItems);
    
  }  else if(req.method === "POST") {
    // Handle POST method
    const archiveItem = { ...req.body };
    const pictures = archiveItem.pictures;

    const formattedAi = {
      user_id: archiveItem.user_id,
      make: archiveItem.make,
      model: archiveItem.model,
      type_id: archiveItem.type_id,
      serial_num: archiveItem.serial_num,
      price: archiveItem.price,
      description: archiveItem.description,
    };

    const newArchiveItem = await ArchiveItem.query()
      .insert(formattedAi)
      .returning("*");

    picturesController.addNewPicture(pictures, newArchiveItem.id);

    const newFormattedAi = await ArchiveItem.query()
      .findById(newArchiveItem.id)
      .withGraphFetched("[types, pictures]");

    res.json(newFormattedAi);
  }
};

export default connectionHandler()(handler);
