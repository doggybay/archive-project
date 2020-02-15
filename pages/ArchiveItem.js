import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

const ArchiveItem = (props) => {
  const router = useRouter();
  console.log('props item page: ', router)
  return (
    <div>
      <h1>Archive Item Page</h1>
    </div>
  )
};


export default ArchiveItem;