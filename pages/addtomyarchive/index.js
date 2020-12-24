import React, { useEffect } from 'react';
import Link from '../../src/Link';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core/';

import { fetchAllTypes } from '../../src/store/types/actionCreators';
import { fetchOneUser } from '../../src/store/users/actionCreators';
import AddArchiveItem from '../../src/components/forms/archive-item/AddArchiveItem';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    
    width: "auto",
    marginTop: theme.spacing(2)
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    
    padding: theme.spacing(2),
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2)
    }
  },
  heading: {
    padding: theme.spacing(2,0,2,5),
    fontFamily: theme.typography.fontFamily
  }, 
  dList: {
    marginLeft: theme.spacing(1)
  }
}));

const AddToMyArchive = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(state => state.users.loggedInUser);

  useEffect(() => {
    dispatch(fetchAllTypes());
    dispatch(fetchOneUser(userLoggedIn.id));
  }, []);


  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Paper elevation={4} className={classes.mainFeaturedPost}>
          <Typography className={classes.heading} variant="h5" component="h1">
            Add to My Archive
          </Typography>
          <Grid container>
            <Grid item md={12}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  variant="h6"
                  component="h2"
                  color="inherit"
                  paragraph
                >
                  Before we begin you will need:
                </Typography>
                <Typography
                  className={classes.dList}
                  variant="subtitle1"
                  color="inherit"
                  paragraph
                >
                  - Manufature name
                </Typography>
                <Typography
                  className={classes.dList}
                  variant="subtitle1"
                  color="inherit"
                  paragraph
                >
                  - Item Model
                </Typography>
                <Typography
                  className={classes.dList}
                  variant="subtitle1"
                  color="inherit"
                  paragraph
                >
                  - Serial Number
                </Typography>
                <Typography
                  className={classes.dList}
                  variant="subtitle1"
                  color="inherit"
                  paragraph
                >
                  - Amount you paid(rounded to nearest dollar)
                </Typography>
                <Typography
                  className={classes.dList}
                  variant="subtitle1"
                  color="inherit"
                  paragraph
                >
                  - At least 1 picture(no more than 4)
                </Typography>
                <Typography variant="h6" paragraph>
                  When ready click
                  <Link
                    variant="h6"
                    href={"/addarchiveitem"}
                    
                  >
                    {" "}
                    here{" "}
                  </Link>
                  to begin
                </Typography>
              </div>
            </Grid>
            <Grid item md={12}>
              <AddArchiveItem />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}


export default AddToMyArchive;

// backgroundColor: theme.palette.grey[800],
// <div className={classes.overlay} />;