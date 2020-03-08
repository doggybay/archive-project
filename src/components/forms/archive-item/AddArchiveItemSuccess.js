import React from 'react';
import { Button } from '@material-ui/core';
import Link from '../../../Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {},
  btn: {
    margin: theme.spacing(2)
  }
}));


const AddArchiveItemSuccess = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  


  return (
    <div>
      <h1>Add item success page</h1>
      <Button variant="contained" color="primary" component={Link} href="/addarchiveitem" className={classes.btn}>
        Add Another
      </Button>
      <Button variant="contained" color="primary" component={Link} href="/mydashboard">
        Dashboard
      </Button>
    </div>
  );
}

export default AddArchiveItemSuccess;