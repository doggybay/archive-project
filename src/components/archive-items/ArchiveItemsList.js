import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, GridList, GridListTile, GridListTileBar, Button, Container, Grid } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Link from '../../Link';
import { useRouter } from 'next/router'

import { fetchOneArchiveItem } from '../../store/archive-items/actionCreators'

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper
//   },
//   gridList: {
//     width: 700,
//     height: "auto"
//   },
//   icon: {
//     color: "rgba(255, 255, 255, 0.54)"
//   }
// }));

const useStyles = makeStyles({
  root: {
    margin: "5px",
    width: "600px",
    minHeight: "200px",
    "&:hover": {
      boxShadow: "-1px 5px 29px 0px rgba(0,0,0,0.5)"
    }
  }
});

const ArchiveItemsList = (props) => {
  const user = useSelector(state => state.users.oneUser)
  const archiveItems = user ? user.archive_items : [];
  const router = useRouter();
  const dispatch = useDispatch();

  const getOneArchiveItem = (id) => {
    dispatch(fetchOneArchiveItem(id))
    
  }
  const classes = useStyles();

  const listOfArchiveItems = archiveItems.map(item => {
    const pictures = item ? item.pictures : [];
    const type = item ? item.types : [];

    

    return (
      <Card className={classes.root} style={{ marginTop: "15px" }}>
      <CardActionArea onClick={() => getOneArchiveItem(item.id)}>
      <Link href={`/archiveitem?id=${item.id}`} >
        <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={pictures[0] ? pictures[0].pic : ""}
        title="Contemplative Reptile"
        />
        </Link>
        </CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {item.make}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {item.description}
        </Typography>
        </CardContent>
      </Card>
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