import '../../styles/global.css';
import './style.css';

import { HeaderApp } from '../components/header';
import React from 'react';

const CadastroPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
 
    }
    return (
        <div>
            <HeaderApp />
            <div className='cadastro'>
                <form onSubmit={handleSubmit}>
                <h1 id='titulo_input'>Titulo:</h1>
                <input id="input_text" name="titulo" required="required" type="text" placeholder="Digite Aqui ... " />
                <h1 id='titulo_input'>Descrição:</h1>
                <textarea id="input_text" name="descricao" required="required" type="text" placeholder="Digite Aqui ... " />
                <h1 id='titulo_input'>Autor:</h1>
                <input id="input_text" name="autor" required="required" type="text" placeholder="Digite Aqui ... " />
                <h1 id='titulo_input'>Base64:</h1>
                <textarea id="input_text" name="base64" required="required" type="text" placeholder="Digite Aqui ... " />
                <br /><br /><br />  
                <div>
                    <button type='submit' id='primario'>Salvar</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroPage;