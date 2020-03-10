import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField, Paper, Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '../../Link';

import ArchiveImageColorful from '../assets/images/ArchiveImageColorful'
import { Email } from '@material-ui/icons';


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
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  console.log(email)
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={4} md={7} className={classes.image}>
        <ArchiveImageColorful classes={classes} />
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
            </Grid>
            <Box mt={5}></Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}


export default Login