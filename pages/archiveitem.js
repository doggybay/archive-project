import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import { Container, Paper, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  cards: {
    width: theme.spacing(16),
    marginRight: "15px",
    marginBottom: "15px"
  },
  grid: {
    display: "flex",
    marginTop: "10px",
    marginBottom: "0px"
  },
  media: {
    height: 140,
    maxWidth: theme.spacing(16)
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(20),
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

const ArchiveItem = (props) => {
  const hcai = staticArchiveItem()
  const data = useSelector(state => state.archiveItems.oneArchiveItem);
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();

  const archiveItem = data.hasOwnProperty('id') ? data : hcai;

  const pictures = archiveItem.pictures;
  const type = archiveItem.types

  console.log('archive item page: ', archiveItem)
  console.log('theme: ', theme)

  const listOfPics = pictures.map(picture => {
    
    return (
      <Card key={picture.id} className={classes.cards} style={{ }}>
      <CardMedia
      className={classes.media}
      image={picture.pic}
      title={`A ${archiveItem.make} ${archiveItem.model}`}
      />
      
        
      </Card>
    );
  })

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Grid item>
        <Paper variant="outlined" elevation={4} className={classes.paper}>
          {listOfPics}
        </Paper>
      </Grid>
    </Grid>
  );
};


export default ArchiveItem;