import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dashboard from '../../src/components/dashboard/Dashboard';
import { fetchOneUser } from '../../src/store/users/actionCreators';
import { fetchAllTypes } from '../../src/store/types/actionCreators'

const MyDashboard = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchOneUser(1));
    dispatch(fetchAllTypes())
  }, []);

  return (
    <Fragment>
      <Dashboard />
    </Fragment>
  )
}

export default MyDashboard;