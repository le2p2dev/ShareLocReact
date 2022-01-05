import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from './auth';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HouseShareFormCreate = () => {
    const {createHouseShare} = useAuth();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        createHouseShare({ name, description })
            .catch(err => {
                setName('');
                setMessage(err.message);
            });
    };


    return (
        <>
            <h2>Create HouseShare</h2>

            <form onSubmit={handleSubmit} >
                <TextField id="outlined-basic" label="Name" variant="outlined"  value={name} onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Description" variant="outlined"  value={description} onChange={(e) => setDescription(e.target.value)}/>
                <Button type="submit" variant="contained">submit</Button>
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </>
    )
};

export default HouseShareFormCreate;
