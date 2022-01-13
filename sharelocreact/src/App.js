import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { AuthProvider } from './routes/auth';


import Menu from './routes/Menu';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Home from './routes/Home';
import Base from './routes/Base';
import HouseShareFormCreate from "./routes/HouseShareFormCreate";
import HouseShare from "./routes/HouseShare";
import HouseShareIndex from "./routes/HouseShareIndex";
import TasksCreate from "./routes/TasksCreate";

const Main = () => {
    return (
        <AuthProvider>
            <Menu />


            <Routes>
                <Route path="/" element={<Base />} />
                <Route path="/houseshare/:id" element={<HouseShareIndex />} />
                <Route path="/tasks/create/:id" element={<TasksCreate />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/houseshare/create" element={<HouseShareFormCreate />}/>
            </Routes>
        </AuthProvider>
    );
};

const App = () =>
    <>
    <HashRouter >
        <Main style={{margin:0}} />
    </HashRouter>
    </>;

export default App;
