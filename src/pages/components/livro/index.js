import './style.css'

import React from 'react';

export default function Livro(props) {
    const livro = props.livro;
    return <>
        <div className='livro'>
            <div className='div-img'>
                <img className='imagem' src={livro.imagem} />
            </div>
            <h4>{livro.titulo}</h4>
        </div>
    </>
}