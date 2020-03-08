import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardMedia } from '@material-ui/core';

import { pictureListStyles } from '../../styles/pictures/styles'



const staticArchiveItem = () => ({
  id: 60,
  user_id: 1,
  type_id: 4,
  make: "Emoltra",
  model: "",
  serial_num: "39114",
  price: 4129,
  description:
    "Commodo laboris labore nostrud do exercitation sint Lorem veniam qui voluptate ipsum. Ea aliqua eiusmod duis mollit nulla excepteur dolor anim. Incididunt exercitation culpa in proident sit.\r\n",
  types: {
    id: 4,
    name: "furniture"
  },
  pictures: [
    {
      id: 75,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=20"
    },
    {
      id: 103,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=180"
    }
  ]
});

const PicturesList = (props) => {
  const hcai = staticArchiveItem();
  const classes = pictureListStyles();
  const data = useSelector(state => state.archiveItems.oneArchiveItem);

  const archiveItem = data.hasOwnProperty("id") ? data : hcai;

  const pictures = archiveItem.pictures;


  const listOfPics = pictures.map((picture, i) => {
    return (
      <Grid item sm={12} md={6}>
        <Card key={picture.id} className={classes.cards} raised>
          <CardMedia
            className={classes.media}
            image={picture.pic}
            title={`A`}
          />
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container className={classes.grid}>
      {listOfPics}
    </Grid>
  );
};

export default PicturesList;
