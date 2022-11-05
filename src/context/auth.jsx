import { api, loginSession } from '../services/api';
import { createContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    

    const navigate = useNavigate();
    const [token, setToken]= useState(null)
    const [loading, setLoading]= useState(true)
    
    useEffect(() => {
        const  result = localStorage.getItem("token") 
        if(!!result){
            setToken(result)
            api.defaults.headers.Authorization  = `Token ${result}`  
        }
        setLoading(false);
    }, []);
    
    const login = async (username, senha)=>{
        
        
        const response = await loginSession(username, senha);
        console.log('login', response.data)
        if(!!response.data){
            setToken(response.data["token"])
            localStorage.setItem("token", response.data["token"])
            api.defaults.headers.Authorization  = `Token ${response.data["token"]}`
            navigate('/')
        }
        
    }
    const logout = ()=>{
        localStorage.removeItem("token")
        console.log("logout")   
        api.defaults.headers.Authorization = null
        setToken(null)
        window.location.reload()
    }
    return (
        <AuthContext.Provider value={{authenticated: !!token, token, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}