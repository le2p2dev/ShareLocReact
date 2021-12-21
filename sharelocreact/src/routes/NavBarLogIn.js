import React, { useState } from 'react';
import { useAuth } from './auth';
import {AppBar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavBarLogIn = () => {


    return (
        <>
            <Box sx={{flexGrow: 1}}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ mr: 2}}> Menu</Typography>
                    <Button color="inherit"> Login</Button>
                </Toolbar>
            </AppBar>
            </Box>

        </>
    );
};

export default NavBarLogIn;
