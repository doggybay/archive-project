import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Link from '../../src/Link';
import { useRouter } from 'next/router'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 700,
    height: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const ArchiveItemsList = (props) => {
  const user = useSelector(state => state.users.oneUser)
  const archiveItems = user ? user.archive_items : [];
  const router = useRouter();

  const classes = useStyles();

  const listOfArchiveItems = archiveItems.map(item => {
    const pictures = item ? item.pictures : [];
    const type = item ? item.types : [];

    console.log('list props: ', router)

    return (
      <GridListTile key={item.id} cols={1}>
        <img src={pictures[0] ? pictures[0].pic : ""} alt={item.make} />
        <GridListTileBar
          actionIcon={
            <IconButton
              aria-label={`info about ${type.name}`}
              className={classes.icon}
              component={Link}
              href={`/archiveitem?id=${item.id}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    );
  })
  //console.log('item list: ', archiveItems)

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        {listOfArchiveItems}
        
      </GridList>
    </div>
  );
}

export default ArchiveItemsList;