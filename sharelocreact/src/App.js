import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { AuthProvider } from './routes/auth';


import Menu from './routes/Menu';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import NavBarLogIn from './routes/NavBarLogIn';
import NavBarLogOut from './routes/NavBarLogOut';

const Home = () => <h3>You're at home</h3>;

const Main = () => {
    return (
        <AuthProvider>
            <Menu />


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AuthProvider>
    );
};

const App = () =>
    <HashRouter>
        <Main />
    </HashRouter>;

export default App;
