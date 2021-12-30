import React, {useEffect, useState} from "react";
import {useAuth} from './auth';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const HouseShare = ({date, description, name}) => {


    const navigate = useNavigate()

    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Crée le {date}</p>
            <Button onClick={() => {
                navigate("/houseshare")
            }}>more info</Button>


        </>
    )
}


export default HouseShare;