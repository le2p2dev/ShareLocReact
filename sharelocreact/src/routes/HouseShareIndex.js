import React, {useEffect, useState} from "react";
import {useAuth} from './auth';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import Task from "./Task";

const HouseShareIndex = ({}) => {

    let {id} = useParams()

    const token = window.localStorage.getItem("message")
    const url_back = 'http://54.36.191.192:8080/ShareLockApi-1.0-SNAPSHOT/api'


    const {login, tasks, getHouseShare, getAllTasks} = useAuth()
    const [loading, setLoading] = useState(true)

    if(loading){
        getAllTasks({id})
        setLoading(false)
    }



    if(tasks){
        console.log(tasks)
    }
    const navigate = useNavigate()

    return (
        <>
            {(tasks) ? tasks.map( (task) => {
                //todo : create component
                return ( <Task title={task.title} description={task.description}  key={task.id} id={task.id} point={task.points} />)
            }) : "Loading" }

            <Button onClick={() => {
                navigate("/tasks/create/"+id)
            }}>Create new task</Button>

        </>
    )
}


export default HouseShareIndex;