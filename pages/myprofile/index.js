import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Box } from '@material-ui/core';

import UserProfile from '../../src/components/users/UserProfile';
import { fetchOneUser } from '../../src/store/users/actionCreators';


const MyProfile = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(state => state.users.loggedInUser);


  useEffect(() => {
    dispatch(fetchOneUser(userLoggedIn.id));
    
  }, []);

  return (
    <Fragment>
      <Typography vcomponent="h2" variant="h3" color="primary" gutterBottom>
        My Profile
      </Typography>
      <UserProfile />
    </Fragment>
  );
};

export default MyProfile;