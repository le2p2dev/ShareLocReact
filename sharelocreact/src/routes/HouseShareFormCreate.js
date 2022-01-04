import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from './auth';

const HouseShareFormCreate = () => {
    const {login} = useAuth();


    return (
        <>
           heelo {login}
            <br/>
            todo: create houseshare creation form
        </>
    )
};

export default HouseShareFormCreate;
