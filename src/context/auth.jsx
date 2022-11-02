import { createContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const navigate = useNavigate();
    const [token, setToken]= useState(null)
    const login = (username, senha)=>{
        
        console.log('login', {username, senha})
        if(senha ==='senha'){
            setToken('asd')
            navigate('/')
        }
        
    }
    const logout = ()=>{
        console.log("logout")
    }
    return (
        <AuthContext.Provider value={{authenticated: !!token, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}