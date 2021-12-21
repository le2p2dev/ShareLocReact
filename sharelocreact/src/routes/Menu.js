import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from './auth';
import NavBarLogOut from "./NavBarLogOut";
import NavBarLogIn from "./NavBarLogIn";

const Menu = () => {
    const {user, signout} = useAuth();

    const items = [
        <li><Link to="/">Home</Link></li>
    ];
    if (!user) {
        items.push(
            <li><Link to="/signin">Signin</Link></li>,
            <li><Link to="/signup">Signup</Link></li>
        );
    } else {
        items.push(
            <li>Connected as {user.username}</li>,
            <li>
                <button onClick={signout}>Signout</button>
            </li>
        );
    }
    return (
        <>
			{
				user ? <NavBarLogOut /> : <NavBarLogIn />
			}
            <ul>{items}</ul>

			{
				user ? " Hello" + user : "you should log in or create an account"
			}
        </>
    )
};

export default Menu;
