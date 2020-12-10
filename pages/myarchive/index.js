import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import ArchiveItemsList from '../../src/components/archive-items/ArchiveItemsList';
import { fetchAllArchiveItems } from '../../src/store/archive-items/actionCreators';
import { fetchOneUser } from '../../src/store/users/actionCreators';

const MyArchive = (props) => {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector(state => state.users.loggedInUser);
  console.log('')

  useEffect(() => {
    dispatch(fetchOneUser(userLoggedIn.id));
  }, [])

  return (
    <div>
      <h1>My Archive</h1>
      <ArchiveItemsList />
    </div>
  );
}

export default MyArchive