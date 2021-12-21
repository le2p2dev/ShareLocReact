import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from './auth';
import NavBarLogOut from "./NavBarLogOut";
import NavBarLogIn from "./NavBarLogIn";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {AccountCircle} from "@mui/icons-material";

const Menu = () => {
    const {login, signout} = useAuth();

    const items = [];
    if (!login) {
        items.push(
           <NavBarLogIn />
        );
    } else {
        items.push(
            <NavBarLogOut funcLogOut={signout} />
        );
    }
    return (
        <>
            {/*
				user ? <NavBarLogOut /> : <NavBarLogIn />

			*/}
            {items}

            {
                login ? "Hello " + login : " You should try to login"
            }
        </>
    )
};

export default Menu;
