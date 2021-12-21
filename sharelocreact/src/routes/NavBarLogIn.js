import React, {useState} from 'react';

import {AppBar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {AccountCircle} from "@mui/icons-material";
import {Link} from "react-router-dom";

const NavBarLogIn = () => {

    const [auth,setAuth] = useState(true)


    return (

        <Box sx={{
            flexGrow: 1, margin: 0, padding: 0
        }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{mr: 2}}> <Link to="/">Home</Link></Typography>
                    <Button color="inherit"> <Link to="/signin">Signin</Link></Button>
                    <Button color="inherit"> <Link to="/signup">Signup</Link></Button>
                    <AccountCircle/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBarLogIn;
