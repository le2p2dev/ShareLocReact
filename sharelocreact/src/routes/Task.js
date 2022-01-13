import React, {useEffect, useState} from "react";
import {useAuth} from './auth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";

const Task = ({title,description,id,point}) => {

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


    //modal -settings
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const navigate = useNavigate()

    const [descriptionEnd,setDescriptionEnd] = useState("")


    return (
        <>
            <>
                {/*

                    Modal

                */
                }
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <h3>Avez vous finis la tache ?</h3>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <TextField id="outlined-basic" label="Login" variant="outlined"  value={descriptionEnd} onChange={(e) => setDescriptionEnd(e.target.value)}/>
                            </Typography>
                            <Button onClick={ () => {
                                alert("vote soumis !")

                            }} > To vote</Button>
                        </Box>
                    </Modal>
                </div>


            </>


            <div>
                <h1>{id} - {title} - +{point}</h1>
                <p>{description}</p>
                <Button onClick={handleOpen}>Task finished</Button>
            </div>

        </>
    )
}


export default Task;