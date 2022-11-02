import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken]= useState(null)
    const login = (username, senha)=>{
        console.log('login', {username, senha})
        setToken( 'asd')
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