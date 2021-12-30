import React, {useEffect, useState} from "react";
import {useAuth} from './auth';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const Base = () => {

    const navigate = useNavigate()



    return (
        <>
           <h1>Welcome to shareloc</h1>

            <Button onClick={ () => {
                if(window.localStorage.getItem("message")){
                    navigate("/home")
                }else{
                    navigate("/signin")
                }

            }}>Access app</Button>

        </>
    )
}


export default Base;