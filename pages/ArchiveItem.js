import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import { Container, Paper, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
  grid: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "0px"
  },
  root: {
    minWidth: 345
  },
  media: {
    height: 140
  }
});

const ArchiveItem = (props) => {
  const archiveItem = useSelector(state => state.archiveItems.oneArchiveItem)
  const router = useRouter();
  const classes = useStyles();
  const pictures = archiveItem.pictures
  const type = archiveItem.types

  const listOfPics = pictures.map(picture => {
    console.log('l',type)
    return (
      <Card key={picture.id} className={classes.root} style={{ marginRight: "15px", marginBottom: "15px"}}>
      <CardMedia
      className={classes.media}
      image={picture.pic}
      title="Contemplative Reptile"
      />
      
        
      </Card>
    );
  })

  return (
    <Grid container className={classes.grid}>
      
      {listOfPics}
    </Grid>
  );
};


export default ArchiveItem;