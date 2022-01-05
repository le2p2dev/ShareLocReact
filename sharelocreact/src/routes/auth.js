import React, {useState, useEffect, createContext, useContext} from 'react';
import {useNavigate} from 'react-router-dom';


const url_back = 'http://54.36.191.192:8080/ShareLockApi-1.0-SNAPSHOT/api'

const AuthContext = createContext(undefined);


export const AuthProvider = ({children}) => {
    const [login, setLogin] = useState(null)
    const [houseshare, setHouseshare] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        const token = window.localStorage.getItem('message')
        console.log(token)
        fetch(`${url_back}/whoami`, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(resp => {
                console.log(window.localStorage)
                setLogin(resp.login)
                setLoading(false)
            })
            .catch(() => {
                setLogin(null)
                setLoading(false)
            })

    }, []);

    if (loading) {
        return <h4>Checking Authentication...</h4>
    }

    const signup = (credentials) => {
        console.log(credentials)
        return fetch(`${url_back}/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                login: credentials.login,
                password: credentials.password,
                firstname: credentials.firstname,
                lastname: credentials.lastname
            })
        }).then(() => {
            navigate('/signin');
        });

    }

    const signin = async (credentials) => {
        return await fetch(`${url_back}/signin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                login: credentials.login,
                password: credentials.password
            })
        })
            .then(res => res.json())
            .then(res => {

                window.localStorage.setItem('message', res.message);
                console.log(window.localStorage)
                setLogin(res.login);
                console.log(login)
                navigate('/');
            }).catch(e => console.log(e));
    };
    const signout = () => {
        window.localStorage.removeItem('message');
        setLogin(null);
        setHouseshare(null);
        navigate('/');
    };

    //api consts
    const getHouseShare = () => {
        const token = window.localStorage.getItem('message')
        return fetch(`${url_back}/houseshare/index`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', Authorization: 'Bearer ' + token}
        }).then(res => res.json()).then(res => {
            console.log("toto")
            console.log(res)
            setHouseshare(res)
        })

    }

    const createHouseShare = (credentials) => {
        const token = window.localStorage.getItem("message")
        return fetch(`${url_back}/houseshare/create`, {
            method: 'POST',
            headers : {'Content-Type': 'application/json', Authorization: 'Bearer ' + token},
            body: JSON.stringify({
                name: credentials.name,
                description: credentials.description
            })
        }).then( res => res.json()).then( data => {
            getHouseShare()
             navigate("/home")
        })
    }

    return (
        <AuthContext.Provider value={{login, houseshare, createHouseShare, signup, signin, signout, getHouseShare}}>
            {children}
        </AuthContext.Provider>
    )


};
export const useAuth = () => useContext(AuthContext);