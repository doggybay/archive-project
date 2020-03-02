import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import { Container, Paper, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemText, } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  cards: {
    width: theme.spacing(16),
    margin: theme.spacing(2),
  },
  grid: {
  },
  media: {
    height: 140,
    maxWidth: theme.spacing(16)
  },
  paper: {
    width: "auto",
    margin: theme.spacing(1),
    marginTop: theme.spacing(3)
  },
  picGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  gridItem: {
    minWidth: theme.spacing(45)
  },
  detailsPaper: {
    
    maxWidth: theme.spacing(90),
    margin: theme.spacing(1)
  },
  detailsTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    },
    {
      id: 103,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=280"
    },
    {
      id: 103,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=80"
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
  const type = archiveItem.types.name

  

  const listOfPics = pictures.map(picture => {
    
    return (
      <Grid item>
        <Card key={picture.id} className={classes.cards} style={{}}>
          <CardMedia
            className={classes.media}
            image={picture.pic}
            title={`A ${archiveItem.make} ${archiveItem.model}`}
          />
        </Card>
      </Grid>
    );
  })

  return (
    <Grid
      container
      spacing={3}
      justify="space-evenly"
      alignItems="center"
      direction="column"
    >
      <Paper elevation={4} className={classes.paper}>
        <Grid container className={classes.picGrid}>
          {listOfPics}
        </Grid>
      </Paper>
      <Paper elevation={4} className={classes.detailsPaper}>
        <List>
          <ListItem>
            <ListItemText primary="Item Make" secondary={archiveItem.make} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item Model" secondary={archiveItem.model} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Item Categoty"
              secondary={type}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Item Serial Number"
              secondary={archiveItem.serial_num}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Item Price"
              secondary={`$${archiveItem.price}.00`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Item Description"
              secondary={archiveItem.description}
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};


export default ArchiveItem;


