import React from 'react';
import { Button } from '@material-ui/core';
import Link from '../../../Link';



const AddArchiveItemSuccess = (props) => {

  return (
    <div>
      <h1>Add item success page</h1>
      <Button variant="contained" color="primary" component={Link} href="/addarchiveitem">
        Add Another
      </Button>
      <Button variant="contained" color="primary" component={Link} href="/dashboard">
        Dashboard
      </Button>
    </div>
  );
}

export default AddArchiveItemSuccess;