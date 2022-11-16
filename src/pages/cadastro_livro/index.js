import '../../styles/global.css';
import './style.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { HeaderApp } from '../components/header';
import { cadastrarLivro } from '../../services/api';

export const BodyCadastroLivro = (props) => {

    const handleSubmit = props.handleSubmit 

    const [titulo, setTitulo] = useState(props.titulo ?? '');
    const [descricao, setDescricao] = useState(props.descricao ?? '');
    const [autor, setAutor] = useState(props.autor ?? '');
    const [base64, setBase64] = useState(props.base64 ?? '');


    return <div className='cadastro'>
        <form>
            <h1 id='titulo_input'>Titulo:</h1>
            <input id="input_text" name="titulo" required="required" type="text" placeholder="Digite Aqui ... " value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <h1 id='titulo_input'>Descrição:</h1>
            <textarea id="input_text" name="descricao" required="required" type="text" placeholder="Digite Aqui ... " value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <h1 id='titulo_input'>Autor:</h1>
            <input id="input_text" name="autor" required="required" type="text" placeholder="Digite Aqui ... " value={autor} onChange={(e) => setAutor(e.target.value)} />
            <h1 id='titulo_input'>Base64:</h1>
            <textarea id="input_text" name="base64" required="required" type="text" placeholder="Digite Aqui ... " value={base64} onChange={(e) => setBase64(e.target.value)} />
            <br /><br /><br />
            <div>
                <Link type='submit' id='primario' onClick={(e) => handleSubmit(e,titulo, descricao, autor,base64)}>Salvar</Link>
            </div>
        </form>
    </div>
}


const CadastroPageLivro = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e,titulo, descricao, autor,base64) => {
        e.preventDefault(); 
        try {
            const response = await cadastrarLivro(titulo, descricao, autor, base64)
            if (response) {
                navigate('/')
                alert('Livro Criado com sucesso')
            } else {
                alert('Erro ao criar novo livro')
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <HeaderApp />
            <BodyCadastroLivro handleSubmit={handleSubmit} titulo = '' descricao='' autor='' base64='' />
        </div>
    );
}

export default CadastroPageLivro;