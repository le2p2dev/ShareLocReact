import React, { useState } from 'react';
import { useAuth } from './auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signin = () => {
    const { signin } = useAuth();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        signin({ login, password })
            .catch(err => {
                setLogin('');
                setPassword('');
                setMessage(err.message);
            });
    };

    return (
        <>
            <h2>Signin form</h2>
            
            <form onSubmit={handleSubmit} >
                <TextField id="outlined-basic" label="Login" variant="outlined"  value={login} onChange={(e) => setLogin(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit" variant="contained">submit</Button>
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </>
    );
};

export default Signin;
