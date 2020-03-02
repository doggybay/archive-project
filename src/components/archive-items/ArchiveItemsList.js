import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Grid, Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '../../Link';
import { useRouter } from 'next/router';

import PicturesList from '../pictures/PicturesList'
import { fetchOneArchiveItem } from '../../store/archive-items/actionCreators';
import ArchiveItem from '../../../pages/archiveitem';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
    minWidth: theme.spacing(40),
    maxWidth: theme.spacing(40),
    minHeight: theme.spacing(20),

    "&:hover": {
      boxShadow: "-1px 5px 29px 0px rgba(0,0,0,0.5)"
    }
  },
  imgs: {
    height: 130
  },
  action: {
    width: 151,
    height: "auto"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2)
  },
  media: {
    height: 140,
    maxWidth: theme.spacing(16)
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(40),
    margin: theme.spacing(1)
  }
}));

const ArchiveItemsList = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector(state => state.users.oneUser);
  const archiveItems = user.hasOwnProperty("id") ? user.archive_items : [];
  const [open, setOpen] = useState(false);


  const getOneArchiveItem = (id) => {
    dispatch(fetchOneArchiveItem(id))
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const listOfArchiveItems = archiveItems.map(item => {
    const pictures = item.pictures;
    const type = item.types;

    const listOfPics = pictures.map(picture => {
      console.log('pic: ', picture.pic)
      return (
        <Card key={picture.id} className={classes.cards} style={{}}>
          <CardMedia
            className={classes.media}
            image={picture.pic}
            title={`A`}
          />
        </Card>
      );
    });

    return (
      <Fragment>
        <Card key={item.id} className={classes.root} style={{}}>
          <div className={classes.controls}>
            <CardActionArea
              className={classes.action}
              onClick={() => {
                getOneArchiveItem(item.id);
                handleClickOpen(item.id);
              }}
            >
              <CardMedia
                component="img"
                alt={`${item.make} ${item.model}`}
                height="100"
                className={classes.imgs}
                src={
                  pictures[0]
                    ? pictures[0].pic
                    : "http://via.placeholder.com/300x200"
                }
                title={`${item.make} ${item.model}`}
              />
            </CardActionArea>
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h1">
                {item.make}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="h3">
                {item.model}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                component={Link}
                href={`/archiveitem?id=${item.id}`}
                onClick={() => getOneArchiveItem(item.id)}
              >
                <InfoIcon />
              </IconButton>
              <IconButton aria-label="share">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="share">
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </div>
        </Card>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <PicturesList />
          
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  })
  //console.log('item list: ', archiveItems)

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "0px"
      }}
    >
      {listOfArchiveItems}
    </Grid>
  );
}

export default ArchiveItemsList;




// <GridList cellHeight={200} className={classes.gridList} cols={3}>
//   {listOfArchiveItems}
// </GridList>;


// <GridListTile key={item.id} cols={1}>
//         <img src={pictures[0] ? pictures[0].pic : ""} alt={item.make} />
//         <GridListTileBar
//           actionIcon={
//             <IconButton
//               aria-label={`info about ${type.name}`}
//               className={classes.icon}
//               component={Link}
//               href={`/archiveitem?id=${item.id}`}
//               onClick={() => getOneArchiveItem(item.id)}
//             >
//               <InfoIcon />
//             </IconButton>
//           }
//         />
//       </GridListTile>