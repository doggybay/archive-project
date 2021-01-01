import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField, Paper, Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { signin, signout, useSession } from 'next-auth/client';

import ArchiveImageColorful from '../../assets/images/ArchiveImageColorful'
import { userLogin } from '../../../store/users/actionCreators'


const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  img: {
    [theme.breakpoints.only("xs")]: {
      width: 320,
      height: 382,
      marginLeft: theme.spacing(4)
    },
    [theme.breakpoints.up("lg")]: {
      
      margin: theme.spacing(20)
    }
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));



const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const router = useRouter();

  const [session, loading] = useSession();
  const userLoggedIn = useSelector((state) => state.users.loggedInUser);
  

  const googleAuth = (e) => {
    e.preventDefault();
    signin();
  };

  
  return (
    <div style={{ display: loading ? "none" : "" }}>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={4} md={7} className={classes.image}>
          <ArchiveImageColorful classes={classes} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Grid container>
              <Grid item xs>
                <a href="/api/auth/signin" onClick={(e) => googleAuth(e)}>
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Sign In
                  </Button>
                </a>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default Login