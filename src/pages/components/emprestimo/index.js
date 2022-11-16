import './style.css';

import React from 'react';

export default function EmprestimoComponent(props) {

    const emprestimo = props.emprestimo;

    const Status = () => {
        if (emprestimo.aprovado) {
            return <label id='status-up'>
                Aprovado
            </label>
        } else {
            return <label>
                Pendente
            </label>
        }
    }

    return <>
        <div>
            <div className='div-img-emprestimo'>
                <img className='imagem-emprestimo' src={emprestimo.livro.base64} />
            </div>
            <div className='div-text-emprestimo'>

                <h4 id='titulo_input'>{emprestimo.livro.titulo}</h4>
                <label >Status: </label>
                <Status />
            </div>
        </div>
    </>
}