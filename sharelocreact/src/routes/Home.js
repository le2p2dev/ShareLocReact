import React, {useEffect, useState} from "react";
import {useAuth} from './auth';
import Button from '@mui/material/Button';
import HouseShare from "./HouseShare";
import AddIcon from '@mui/icons-material/Add';
import {Box, Modal, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";

const Home = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const {login, houseshare, getHouseShare} = useAuth()

    const [loading, setLoading] = useState(true)
    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)

    //handle funcs for modals
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const handleOpen2 = () => setOpen2(true)
    const handleClose2 = () => setOpen2(false)

    useEffect(() => {
        if (!houseshare) {
            getHouseShare()
            setLoading(false)
        }
    }, [])
    console.log(houseshare)

    const navigate = useNavigate()

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography>
                        Do you want to create or join a houseshare ?
                    </Typography>
                    <Button onClick={handleOpen2}>Join</Button>
                    <Button onClick={ () => {
                        navigate('/houseshare/create')
                    }}>Create</Button>
                </Box>
            </Modal>

            <Modal open={open2} onClose={handleClose2}>
                <Box sx={style}>
                    <Typography>
                        Join a houseshare
                        <TextField id="outlined-basic" label="Code" variant="outlined"  />
                    </Typography>
                    <Button onClick={handleClose2}>Close</Button>

                </Box>
            </Modal>

            {/*
            Créer la modal pour entrer un code pour rejoindre une colloc
            */}
            <h3> {login}'s HouseShares</h3>
            {
                (houseshare) ? houseshare.map((data) => {
                //todo : create a card for each houseshare in a new component
                return (<HouseShare name={data.name} date={data.dateCreation} description={data.description} />)}) : "No HouseShare Founded, try to create one"
            }

            <br/>

            <Button onClick={handleOpen}> <AddIcon/> Create HouseShare</Button>


        </>
    )
}


export default Home;