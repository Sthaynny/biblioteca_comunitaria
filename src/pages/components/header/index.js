import 'react-modern-drawer/dist/index.css';
import "./style.css";

import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../../../context/auth';
import { DrawerApp } from '../drawer';
import drawerLogo from '../../../icons/drawer.png';

export const HeaderApp = () => {
    
    const [isOpen, setIsOpen] = useState(false)
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
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return <>
        <div class="header">
            <DrawerApp isOpen={isOpen} toggleDrawer={toggleDrawer}/>
            <Link onClick={toggleDrawer}><img src={drawerLogo}/></Link>
            <Link className="logo" onClick={handleHome}>Biblioteca Comunitaria</Link>
            <div class="header-right">
                <AcoesHeader />
            </div>
        </div>
    </>
}