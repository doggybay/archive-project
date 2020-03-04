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
import { fetchAllTypes } from '../../store/types/actionCreators';
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
  },
  picDialog: {
    maxWidth: theme.spacing(60),
    display: "flex",
    padding: theme.spacing(2),
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
  const [displayPic, setDisplayPic] = useState(0);


  const getOneArchiveItem = (id) => {
    dispatch(fetchOneArchiveItem(id))
  };
  
  const getAllTypes = () => {
    dispatch(fetchAllTypes())
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const listOfArchiveItems = archiveItems.map(item => {
    console.log("state pic: ", displayPic)
    const pictures = item.pictures;
    const type = item.types;

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
                aria-label="more info"
                component={Link}
                href={`/archiveitem?id=${item.id}`}
                onClick={() => getOneArchiveItem(item.id)}
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                aria-label="edit archive item"
                component={Link}
                href={`/myarchive/editmyarchiveitem?id=${item.id}`}
                onClick={() => {
                  getAllTypes();
                  getOneArchiveItem(item.id);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete archive item">
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
          <DialogContent className={classes.picDialog}>
            <PicturesList
              setDisplayPic={setDisplayPic}
              handleClose={handleClose}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
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