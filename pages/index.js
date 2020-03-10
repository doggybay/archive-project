import React, { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, Box } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import CssBaseline from '@material-ui/core/CssBaseline';



import { fetchAllUsers, fetchOneUser } from '../src/store/users/actionCreators';
import { fetchAllArchiveItems } from '../src/store/archive-items/actionCreators';
import { fetchAllTypes } from '../src/store/types/actionCreators';
import Login from '../src/components/auth/Login'
import ArchiveItem from '../pages/archiveitem';


export default function App(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    //dispatch(fetchAllUsers());
    // dispatch(fetchAllArchiveItems());
    // dispatch(fetchOneUser(1));
  }, []);
  
  return (
    <Fragment>
      <Login />
      
    </Fragment>
  );
}


// <Container maxWidth="sm">
//   <Box my={10}>
//     <Typography variant="h4" component="h1" gutterBottom>
//       Welcome to Archive
//     </Typography>
//   </Box>
// </Container>;