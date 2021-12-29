import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from './auth';
import NavBarLogOut from "./NavBarLogOut";
import NavBarLogIn from "./NavBarLogIn";


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
            {items}
        </>
    )
};

export default Menu;
