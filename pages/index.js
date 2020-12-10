import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { signin, signout, useSession } from "next-auth/client";
import Login from '../src/components/forms/auth/Login';
import Loading from '../src/components/users/Loading';
import RegisterNewUser from '../src/components/users/RegisterNewUser';
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from '../src/store/users/actionCreators';


export default function App(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const userLoggedIn = useSelector((state) => state.users.loggedInUser);
  const userLoading = useSelector((state) => state.users.loading);
  
  const [session, loading] = useSession();
  
  useEffect(() => {

    if (!session && !userLoggedIn.hasOwnProperty("id")) {
      localStorage.clear();
    }
    
    if (loading && session && !userLoggedIn.hasOwnProperty("id")) {

      const state ={ email: session.user.email };

      dispatch(userLogin(state, router));
    }

  }, [session, userLoggedIn])

  console.log('index-app: ', loading, session)

  return (
    <Fragment>
      {loading && userLoading && <Loading />}
      <div style={{ display: loading && userLoading ? "none" : "" }}>
        <Login />
      </div>
    </Fragment>
  );
}
