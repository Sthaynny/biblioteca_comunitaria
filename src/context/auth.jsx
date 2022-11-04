import { createContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    

    const navigate = useNavigate();
    const [token, setToken]= useState(null)
    const [loading, setLoading]= useState(true)
    
    useEffect(() => {
        const  result = localStorage.getItem("token")

        if(result){
            setToken(result)
        }
        setLoading(false);
    }, []);
    
    const login = (username, senha)=>{
        
        console.log('login', {username, senha})
        if(senha ==='senha'){
            setToken('asd')
 
            localStorage.setItem("token", token)
            navigate('/')
        }
        
    }
    const logout = ()=>{
        console.log("logout")
    }
    return (
        <AuthContext.Provider value={{authenticated: !!token, token, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}