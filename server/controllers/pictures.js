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

exports.addPicFromUpdate = async (pictures, Id) => {
  
  for (let i = 0; i < pictures.length; i++) {
    
    if (!pictures[i].hasOwnProperty("id")) {
      let formattedPic = {
        archive_item_id: Number(Id),
        pic: pictures[i].pic
      };
      
      const newPicture = await Picture.query().insert(formattedPic);
    }
  }
};

exports.deletePictures = async (ids) => {
  for (let i = 0; i < ids.length; i++) {
    const deletedPic = Picture.query().deleteById(ids[i]).returning('*')
  }
}