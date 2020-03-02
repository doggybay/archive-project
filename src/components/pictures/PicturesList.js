import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Container, Paper, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cards: {
    width: theme.spacing(20),
    marginTop: theme.spacing(2),
    minHeight: theme.spacing(20)
  },
  grid: {
    display: "flex",
    justifyContent: "space-around",
    width: "400px"
  },
  media: {
    height: 140,
    maxWidth: theme.spacing(16),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  }
}));

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
  const classes = useStyles();
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
