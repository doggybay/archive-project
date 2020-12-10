import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin, signout, useSession } from "next-auth/client";
import Dashboard from '../../src/components/dashboard/Dashboard';
import { fetchOneUser, userLogin } from '../../src/store/users/actionCreators';
import { fetchAllTypes } from '../../src/store/types/actionCreators'

const MyDashboard = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(state => state.users.loggedInUser);
  const [session, loading] = useSession();


  useEffect(() => {
    
    dispatch(fetchOneUser(userLoggedIn.id));
    dispatch(fetchAllTypes())
  }, []);

  return (
    <div style={{ display: session ? "" : "none" }}>
      <Dashboard />
    </div>
  );
}

export default MyDashboard;