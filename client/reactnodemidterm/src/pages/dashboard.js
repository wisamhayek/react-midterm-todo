import React, { Fragment, useEffect } from "react";
import * as ROUTES from '../constants/routes';
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import AddTaskForm from "./addTaskForm";
import AllTasks from "./allTasks";

const pages = ['To Do'];
const settings = ['Logout'];

export default function Dashboard() {

  const navigate = useNavigate();
  var user = JSON.parse(localStorage.getItem('activeUser'));


  useEffect(() => {
    if (!user){
      setTimeout(navigate(ROUTES.LOGIN),2000);
    }
  },[user]);


  function logout(){
    localStorage.removeItem('activeUser');
    localStorage.removeItem('userToken');
    navigate(ROUTES.LOGIN)
  }


  // ------------>> React MUI App Bar <<------------
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
// ------------>> React MUI App Bar <<------------

  if(user){
  return (
    <Fragment>
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          Dunder Mifflin Inc.
        </Typography>

        {/* This section will render only on small screen -  MENU side icon/bar */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          {user.name}
        </Typography>
       {/* This section will render only on small screen -  MENU side icon/bar */}


        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>


        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{margin:"auto", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        >
          {user.name}
        </Typography>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user.name} src="#" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={(e)=>{
                handleCloseUserMenu();
                //Logout functionality here
                if (e.target.textContent === "Logout") {
                  // console.log("Should logout here");
                  logout();
                }
                }}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>

  <AddTaskForm />
  <AllTasks />
  </Fragment>
  )}

  return (
    <h3 style={{textAlign: "center",margin: "auto",justifyContent: "center"}}>Loading Dashboard</h3>
  )
}