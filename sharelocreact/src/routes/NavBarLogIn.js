import React, {useState} from 'react';

import {AppBar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {AccountCircle} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";

const NavBarLogIn = () => {

    const navigate = useNavigate();

    return (

        <Box sx={{
            flexGrow: 1, margin: 0, padding: 0
        }}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={() => {
                        navigate("/")
                    }}>Home</Button>

                    <Button color="inherit" onClick={() => {
                        navigate("/signin")
                    }}>Log in</Button>
                    <Button color="inherit" onClick={ () => {
                        navigate("/signup")
                    }}> Create account</Button>


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBarLogIn;
