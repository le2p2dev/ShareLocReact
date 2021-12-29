import React, {useEffect, useState} from "react";
import {useAuth} from './auth';
import Button from '@mui/material/Button';

const Home = () => {
    const {login, houseshare, getHouseShare} = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!houseshare) {
            getHouseShare()
            setLoading(false)
        }
    }, [])
    console.log(houseshare)


    return (
        <>
            <h3> {login}'s HouseShares</h3>
            {(houseshare) ? houseshare.map((data) => {
                //todo : create a card for each houseshare in a new component
                return (
                    <>
                        <h1> {data.name}</h1>
                        <Button  variant="contained">accéder</Button>

                    </>


                )
            }) : "loading..."}

        </>
    )
}


export default Home;