import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Card, CardMedia, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
}));

const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector(state => state.users.oneUser)

  console.log('user profile: ', user)
  const address = user.hasOwnProperty('id') ? user.addresses[0] : [];

  console.log('user profile: ', address)

  return (
    <Fragment>
      <div className={classes.layout}>
        <Paper elevation={4} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Personal information
              </Typography>
              <Typography
                gutterBottom
              >{`${user.first_name} ${user.last_name}`}</Typography>
              <Typography
                gutterBottom
              >{`${address.st_address}, ${address.opt_address}, ${address.city}, ${address.state}, ${address.zip_code} `}</Typography>
              <Typography gutterBottom>{`${user.email}`}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Fragment>
  );
    }
    
export default UserProfile;
    
