import "./style.css";

import React, { useContext } from 'react';

import { AuthContext } from "../../../context/auth";
import Drawer from 'react-modern-drawer';
import { Link } from 'react-router-dom';

export const DrawerApp = (props) => {
    const isOpen = props.isOpen;
    const toggleDrawer = props.toggleDrawer

    const { superUser } = useContext(AuthContext);

    const ListDrawer = () => {
        if (superUser) {
            return <div>
                <Link className='option' to='/cadastro-livro/'>Cadastro Livro</Link>
                <Link className='option'>Emprestimos</Link>
            </div>
        } else {

            return <div>
                <Link className='option' to='/meus-emprestimos'>Meus Emprestimos</Link>
            </div>
        }
    }

    return <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{ backgroundColor: '#362E49', }}>
        <h2>Menu</h2>
        <ListDrawer />
    </Drawer>
}