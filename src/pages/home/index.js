import React, { useContext, useEffect, useState } from 'react';
import { HeaderApp } from '../components/header';

import { AuthContext } from "../../context/auth";
import { getUser } from '../../services/api';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const respose = await getUser();
            setUsers(respose.data)
            setLoading(false)
            console.log(respose.data);
        })()
    }, []);
    
    const { logout, authenticated } = useContext(AuthContext)
    const handleLogout = (e) => {
        logout()
    }
    if(loading){
        return <div>
            
            <HeaderApp />
            Carregando...
            </div>
    }
    return ( 
        <dev>
            <HeaderApp />
            <h2>Meus emprestimos</h2>
            <ul>
                {
                    users.map((user) => (
                        <li>
                            {
                                user.username
                            }
                        </li>
                    ))
                } 
            </ul>
            <p>
                {String(authenticated)}
            </p>
            <button onClick={handleLogout}>Logout</button>
        </dev>
       
    );
}

export default HomePage;