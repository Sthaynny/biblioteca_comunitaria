import { api, getUser, loginSession } from '../services/api';
import { createContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)
    const [superUser, setSuperUser] = useState(false);
    useEffect(() => {
        const result = localStorage.getItem("token")
        const resultSuperUSer = localStorage.getItem("superUser")
        if (!!result && resultSuperUSer) {
            setToken(result)
            setSuperUser(JSON.parse(resultSuperUSer)===true )
            api.defaults.headers.Authorization = `Token ${result}`
        }
        setLoading(false);
    }, []);

    const login = async (username, senha) => {

        try {
            const response = await loginSession(username, senha);
            console.log('login', response.data)
            if (!!response.data) {
                api.defaults.headers.Authorization = `Token ${response.data["token"]}`
                const responseUser = await getUser();
                setToken(response.data["token"])
                localStorage.setItem("token", response.data["token"])
                localStorage.setItem("superUser", JSON.stringify(responseUser.data["is_superuser"]) ?? false)
                navigate('/')
            } else {
                alert('Usuario ou senha incorretos')
            }
        } catch (error) {
            alert(error)
        }

    }
    const logout = () => {
        localStorage.removeItem("token") 
        localStorage.removeItem("superUser") 
        api.defaults.headers.Authorization = null
        setToken(null)
        window.location.reload()
    }
    return (
        <AuthContext.Provider value={{ authenticated: !!token, token, loading, login, logout, superUser}}>
            {children}
        </AuthContext.Provider>
    )
}