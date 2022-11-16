import './style.css';

import { Link, useNavigate } from "react-router-dom";

import React from 'react';

export default function Livro(props) {

    const navigate = useNavigate();
    const livro = props.livro;
 

    const handleLivro = (e) => {
        e.preventDefault(); 
        navigate('/detalhe-livro/' + livro.id)
    }
    return <>
        <Link id='link' to={'/detalhe-livro/' + livro.id}>
        <div className='livro'>
            <div className='div-img'>
                <img className='imagem' src={livro.base64} />
            </div>
            <h4>{livro.titulo}</h4>
        </div>
        </Link>
    </>
}