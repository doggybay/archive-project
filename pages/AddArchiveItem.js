import React from 'react';
import { Container, Typography, Box, Paper } from '@material-ui/core';
import AddArchiveItemForm from '../components/forms/AddArchiveItemForm'
const AddArchiveItem = () => {

  return (
    <Paper elevation={4} >
      <Typography variant="h5" component="h5">
        Add A New Item to your Archive
      </Typography>

      <AddArchiveItemForm />

    </Paper>
  )
}

export default AddArchiveItem;