import { HeaderApp } from '../components/header';
import { Link } from 'react-router-dom';
import React from 'react';

const Cadastro = () => {
    return (
        <div>
            <HeaderApp />
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Cadastro;