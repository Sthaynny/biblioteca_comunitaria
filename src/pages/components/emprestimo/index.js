import './style.css';

import React from 'react';

export function EmprestimoComponent(props) {
    const emprestimo = props.emprestimo;

    const Status = () => {
        if (emprestimo.aprovado) {
            return <label id='status-up'>
                Aprovado
            </label>
        } else {
            return <label  id='status-down'>
                Pendente
            </label>
        }
    }

    return <>
        <div id='escopo-emprestimo'>
            <div className='div-img-emprestimo'>
                <img className='imagem-emprestimo' src={emprestimo.livro.base64} />
            </div>
            <div className='div-text-emprestimo'>

                <h4 id='titulo_input'>{emprestimo.livro.titulo}</h4>
                <label >Status: </label>
                <Status />
                <br/> 
            </div>
            <br /> <br /> 
        </div>
    </>
}
 