import React, { useEffect } from 'react';
import Link from '../../src/Link';
import { useDispatch } from 'react-redux';

import { fetchAllTypes } from '../../src/store/types/actionCreators';


const AddToMyArchive = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllTypes())
  })


  return (
    <div>
      <h1>Landing for to add an item</h1>
      <Link href={"/addarchiveitem"}>Click here to add</Link>
    </div>
  );
}


export default AddToMyArchive;

