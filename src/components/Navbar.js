// import React from 'react';

import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" style={{ backgroundColor:'rgb(82, 132, 218)'}}>
        
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>ZaQ-Company</Typography>

          <Button component={NavLink} to='/home' style={({ isActive }) => { return { backgroundColor: isActive ? '#bcbbbb' : '' } }} sx={{ color: 'black' , textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#bcbbbb' : '' } }} sx={{ color: 'black' , textTransform: 'none'}}>Contact</Button>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#bcbbbb' : '' } }} sx={{ color: 'black', textTransform: 'none' }}>Login/Registration</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;