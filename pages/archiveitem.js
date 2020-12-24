import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Card, CardMedia, List, ListItem, ListItemText, } from '@material-ui/core';
import { staticArchiveItem } from '../src/components/utils/staticArchiveItem';
import { archiveItemStyles } from '../src/styles/archiveItems/styles';


const ArchiveItem = (props) => {
  const hcai = staticArchiveItem()
  const data = useSelector(state => state.archiveItems.oneArchiveItem);
  const classes = archiveItemStyles();

  const archiveItem = data.hasOwnProperty('id') ? data : hcai;

  const pictures = archiveItem.pictures;
  const type = archiveItem.types.name

  

  const listOfPics = pictures.map(picture => {
    
    return (
      <Grid key={picture.id} item>
        <Card className={classes.cards} style={{}}>
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
          <ListItem key={archiveItem.make}>
            <ListItemText primary="Item Make" secondary={archiveItem.make} />
          </ListItem>
          <ListItem key={archiveItem.model}>
            <ListItemText primary="Item Model" secondary={archiveItem.model} />
          </ListItem>
          <ListItem key={type}>
            <ListItemText
              primary="Item Categoty"
              secondary={type}
            />
          </ListItem>
          <ListItem key={archiveItem.serial_num}>
            <ListItemText
              primary="Item Serial Number"
              secondary={archiveItem.serial_num}
            />
          </ListItem>
          <ListItem key={archiveItem.price}>
            <ListItemText
              primary="Item Price"
              secondary={`$${archiveItem.price}.00`}
            />
          </ListItem>
          <ListItem key={archiveItem.description}>
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


