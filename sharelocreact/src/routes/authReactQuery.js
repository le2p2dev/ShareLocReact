import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {QueryClient, QueryClientProvider, useMutation, useQuery} from "react-query";

const url_back = 'http://54.36.191.192:8080/ShareLockApi-1.0-SNAPSHOT/api'
const queryClient = new QueryClient()

export const Auth = ({children}) => {
    const [login,setLogin] = useState(null)
    const [houseshare,setHouseshare] = useState(null)

    const navigate = useNavigate()

    const {isLoading,data,error} = useQuery("test", () => {
        const token = window.localStorage.getItem('message')
        console.log(token)
        fetch(`${url_back}/whoami`,{
            method: "GET",
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then( resp => {
                console.log(resp)

            })
    })

    if (isLoading){
        return <h4>Checking credentials..</h4>
    }

    const Signup = (credentials) => {

        const {mutate,info} = useMutation(() => {
            fetch(`${url_back}/signup`,{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    login: credentials.login,
                    password: credentials.password,
                    firstname: credentials.firstname,
                    lastname: credentials.lastname
                })
            }).then(() => {
                navigate('/signin');
            });
        })


    }

    return (
         <QueryClientProvider client={queryClient} value={{ login,houseshare, Signup, }}>
            {children}
         </QueryClientProvider>

    )
}