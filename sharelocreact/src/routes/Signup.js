import React, { useState } from 'react';
import { useAuth } from './auth';
import TextField from "@mui/material/TextField";

const Signup = () => {
    const { signup } = useAuth();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        signup({ login, password ,firstname,lastname})
            .catch(err => {
                setLogin('');
                setPassword('');
                setMessage(err.message);
            });
    };

    const formValid = login && password;

    return (
        <>
            <h2>Signup form</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Login" variant="outlined"  value={login} onChange={(e) => setLogin(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <TextField id="outlined-basic" label="fristname" variant="outlined"  value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                <TextField id="outlined-basic" label="lastname" variant="outlined"  value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                <input disabled={formValid ? '' : 'disabled'} type="submit" />
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </>
    );
};

export default Signup;
