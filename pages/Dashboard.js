import React from 'react';

import ArchiveItemsList from '../components/archive-items/ArchiveItemsList'

const Dashboard = (props) => {
  console.log('dash props:', props)
  return (
    <div>
      <h1>Dashboard!!!</h1>
      <ArchiveItemsList />
    </div>
  )
}

export default Dashboard