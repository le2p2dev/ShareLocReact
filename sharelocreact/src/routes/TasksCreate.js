import React, {useEffect, useState} from "react";
import {useAuth} from './auth';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const TasksCreate = () => {

    const {id} = useParams()
    const {login, categories, getCategories, createTasks} = useAuth()

    useEffect(() => {
        if (!categories) {
            getCategories()
            setLoading(false)
        }
    }, [])

    const idColloc = parseInt(id)

    const [idCategory, setIdCategory] = useState(0)
    const [point, setPoint] = useState(0)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(true)



    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        createTasks({ idCategory ,idColloc, point , title , description  })
            .catch(err => {
                setTitle('');
                setIdCategory(0);
                setDescription('');
                setPoint(0);
                setIdCategory(0)
                setMessage(err.message);
            });
    };

    return (
        <>


            <h2>Formulaire de création de tâches</h2>

            <form onSubmit={handleSubmit} >
                <TextField id="outlined-basic" label="Name" variant="outlined"  value={title} onChange={(e) => setTitle(e.target.value)}/>
                <TextField id="outlined-basic" label="Description" variant="outlined"  value={description} onChange={(e) => setDescription(e.target.value)}/>
                <TextField id="outlined-basic" type="number" label="Points" variant="outlined"  value={point} onChange={(e) => setPoint(parseInt(e.target.value))}/>

                <Select label="age" value={idCategory} onChange={e => setIdCategory(parseInt(e.target.value))} >
                    { (categories) ? categories.map((data) => {
                        return (<MenuItem value={data.id} key={data.id}> {data.id}> {data.label}</MenuItem> )
                    }) : <MenuItem value="0"> Pas d'entreprises</MenuItem>}
                </Select>
                <Button type="submit" variant="contained">submit</Button>
            </form>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </>
    )
}


export default TasksCreate;