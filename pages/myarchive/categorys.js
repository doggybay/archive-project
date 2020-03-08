import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import CategoryList from '../../src/components/archive-items/CategoryList'

const Categorys = () => {
  const router = useRouter();
  const typeId = Number(router.query.type)
  const user = useSelector(state => state.users.oneUser);
  const userArchive = user.hasOwnProperty("id") ? user.archive_items : [];

  const filteredArchive = userArchive.filter(item => item.type_id === typeId);

  return (
      <CategoryList archiveItems={filteredArchive} />
  );
}

export default Categorys