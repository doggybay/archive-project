import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dashboard from '../../src/components/dashboard/Dashboard';
import { fetchOneUser } from '../../src/store/users/actionCreators';
import { fetchAllTypes } from '../../src/store/types/actionCreators'

const MyDashboard = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(state => state.users.loggedInUser);


  useEffect(() => {
    dispatch(fetchOneUser(userLoggedIn.id));
    dispatch(fetchAllTypes())
  }, []);

  return (
    <Fragment>
      <Dashboard />
    </Fragment>
  )
}

export default MyDashboard;