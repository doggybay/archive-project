import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArchiveIcon from '@material-ui/icons/Archive';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from './Link';

export const mainListItems = (
  <div>
    <ListItem button component={Link} href="/mydashboard">
      <ListItemIcon >
        <DashboardIcon  />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} href="/myarchive">
      <ListItemIcon>
        <ArchiveIcon />
      </ListItemIcon>
      <ListItemText primary="My Archive" />
    </ListItem>
    <ListItem button component={Link} href="/addtomyarchive">
      <ListItemIcon>
        <LibraryAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add to My Archive" />
    </ListItem>
  </div>
);
