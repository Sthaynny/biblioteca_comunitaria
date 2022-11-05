import React, { useContext, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth';
import "./style.css";

import 'react-modern-drawer/dist/index.css';
export const HeaderApp = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const navigate = useNavigate();
    const { logout, authenticated } = useContext(AuthContext)

    const AcoesHeader = () => {
        if (authenticated) {
            return <Link className="sair" onClick={handleLogout}>Sair</Link>

        } else {
            return <Link className="login" to='/login'>Login</Link>
        }
    }

    const handleLogout = (e) => {

        e.preventDefault();
        logout()
    }

    const handleHome = (e) => {

        e.preventDefault();
        navigate('/')
    }
    return <>
        <div class="header">
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'  style={{backgroundColor: '#362E49',}}>
                <div>Hello World</div>
            </Drawer>
            <Link className="logo" onClick={handleHome}>Biblioteca Comunitaria</Link>
            <div class="header-right">
                <AcoesHeader />
            </div>
            <button onClick={toggleDrawer}>Show</button>
        </div>
    </>
}