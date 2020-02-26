const Picture = require('../models/Picture')

exports.addNewPicture = async (pictures, archiveId) => {
  console.log(pictures)
  for (let i = 0; i < pictures.length; i++) {
    let formattedPic = {
      archive_item_id: archiveId,
      pic: pictures[i]
    }

    const newPicture = await Picture.query().insert(formattedPic)

  }

  
}