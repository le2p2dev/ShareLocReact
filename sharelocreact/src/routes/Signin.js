import React, { useState } from 'react';
import { useAuth } from './auth';

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
                <label>Username</label>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </>
    );
};

export default Signin;
