import React from 'react';
import Link from '../../src/Link';

const AddToMyArchive = (props) => {

  return (
    <div>
      <h1>Landing for to add an item</h1>
      <Link href={"/addarchiveitem"}>Click here to add</Link>
    </div>
  );
}


export default AddToMyArchive;

