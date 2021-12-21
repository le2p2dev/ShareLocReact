import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavBarLogOut = (props) => {


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{mr: 2}}> Menu</Typography>
                    <Button color="inherit" onClick={props.funcLogOut}> LogOut</Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default NavBarLogOut;
