import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, List, Divider, Drawer } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';

import { userLogout } from '../../store/users/actionCreators'
import { mainListItems } from '../../listItems'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const userLoggedIn = useSelector(state => state.users.loggedInUser);

  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [left, setLeft] = useState(false);

  const open = Boolean(anchorEl);


  useEffect(() => {
    userLoggedIn.hasOwnProperty('id') ? setAuth(true) : setAuth(false)
  })

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    router.push("/myprofile")
  };

  const handleLogout = () => {
    setAnchorEl(null);
    setAuth(false)
    dispatch(userLogout(router))
  }

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setLeft(open);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      
    >
      <List>
        {mainListItems}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root} style={{ display: auth ? "" : "none" }}>
      <AppBar position="static">
        <Toolbar>
          {auth && (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          )}
          <Typography variant="h6" className={classes.title}>
            Archive
          </Typography>

          <Drawer open={left} onClose={toggleDrawer(false)}>
            {sideList()}
          </Drawer>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav
