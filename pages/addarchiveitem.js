import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Paper } from '@material-ui/core';
import AddArchiveItemForm from '../src/components/forms/AddArchiveItemForm'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2)
    },
  },
}));


const AddArchiveItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={4}>
        <Typography variant="h5" component="h2">
          Add A New Item to your Archive
        </Typography>

        <AddArchiveItemForm />

      </Paper>
    </div>
    
  )
}

export default AddArchiveItem;