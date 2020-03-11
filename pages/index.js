import React, { Fragment, useEffect, useState } from 'react';

import Login from '../src/components/auth/Login'


export default function App(props) {
const [localUser, setLocalUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    
  }, [])

  return (
    <Fragment>
      <Login  />
      
    </Fragment>
  );
}
