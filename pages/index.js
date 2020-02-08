import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, Box } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';



import { fetchAllUsers } from '../store/users/actionCreators'




export default function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers());
  });

  return (
    <div>
      
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Archive
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          
        </Box>
      </Container>
    </div>
  );
}
