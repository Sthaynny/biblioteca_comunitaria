import "./style.css";

import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

import { AuthContext } from '../../../context/auth';
import Drawer from 'react-modern-drawer';

export const DrawerApp = (props) => {
    const isOpen = props.isOpen;
    const toggleDrawer = props.toggleDrawer
    const navigate = useNavigate();
    const { authenticated } = useContext(AuthContext)
    
    


    return <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{ backgroundColor: '#362E49', }}>
        <h2>Menu</h2>
        <Link className='option'>Cadastro Livro</Link>
        <Link className='option'>Emprestimos</Link>
    </Drawer>
}