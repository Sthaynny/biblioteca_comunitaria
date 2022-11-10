import "./style.css";

import Drawer from 'react-modern-drawer';
import { Link } from 'react-router-dom';
import React from 'react';

export const DrawerApp = (props) => {
    const isOpen = props.isOpen;
    const toggleDrawer = props.toggleDrawer  
    
    return <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{ backgroundColor: '#362E49', }}>
        <h2>Menu</h2>
        <Link className='option' to='/cadastro-livro'>Cadastro Livro</Link>
        <Link className='option'>Emprestimos</Link>
    </Drawer>
}