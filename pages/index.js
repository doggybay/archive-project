import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, Box } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';



import { fetchAllUsers, fetchOneUser } from '../store/users/actionCreators'
import { fetchAllArchiveItems } from '../store/archive-items/actionCreators'




export default function Index(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllArchiveItems());
    dispatch(fetchOneUser(1));
  });
  console.log('app props:', props)
  return (
    <div>
      
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Archive
          </Typography>
          <Link href="/dashboard" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          
        </Box>
      </Container>
    </div>
  );
}
