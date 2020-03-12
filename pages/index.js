import React, { Fragment, useEffect, useState } from 'react';

import Login from '../src/components/forms/auth/Login'
import RegisterNewUser from '../src/components/users/RegisterNewUser'


export default function App(props) {
const [localUser, setLocalUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    
  }, [])

  return (
    <Fragment>
      <RegisterNewUser />
      
    </Fragment>
  );
}
