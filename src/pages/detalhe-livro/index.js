import './style.css';

import { cadastrarLivro, getLivros } from '../../services/api';
import { useEffect, useState } from "react";

import { BodyCadastro } from '../cadastro';
import { HeaderApp } from "../components/header";
import Loader from '../components/loading';
import { useParams } from "react-router-dom";

const DetalhesLivroPage = () => {
    const { id } = useParams();
    const [edicao, setEdicao] = useState(false);
    const [livro, setLivro] = useState();
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [autor, setAutor] = useState('');
    const [base64, setBase64] = useState('');

    const handleSubmit = async (e, titulo, descricao, autor, base64) => {
        e.preventDefault();
        try {
            const response = await cadastrarLivro(titulo, descricao, autor, base64, id)
            if (response) {
                setEdicao(false)
                alert('Livro Criado com sucesso')
            } else {
                alert('Erro ao criar novo livro')
            }
        } catch (error) {
            alert(error)
        }

        getLivro()
    }

    async function getLivro() {
        try {
            const respose = await getLivros(id);
            setLivro(respose.data);
            setTitulo(livro.titulo)
            setAutor(livro.autor)
            setBase64(livro.base64)
            setDescricao(livro.descricao)
            setLoading(false)
        } catch (error) {

        }
    };

    useEffect(() => {
        getLivro()
        setLoading(false)
    }, []);


    const Body = () => {
        if (loading) {
            return <div className='loading'>
                <Loader />
            </div>
        } else {
            if (edicao) {
                return <BodyCadastro handleSubmit={(e) => handleSubmit(e, titulo, descricao, autor, base64)} />
            } else {
                return (
                    <div className='body'>
                        <div id='capa-livro'>
                            <img src={livro.base64} />
                        </div>
                        <h3>
                            Titulo:<br />
                            {livro.titulo}
                        </h3>
                        <h3>
                            Descrição:<br />
                            {livro.descricao}
                        </h3>
                        <h3>
                            Autor: <br />
                            {livro.autor}
                        </h3>

                        <div>
                            <button type='submit' id='primario' onClick={(e) => {
                                e.preventDefault();
                                setEdicao(true);
                            }}>Editar</button>
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <div>
            <HeaderApp />
            <Body />
        </div>
    )

}

export default DetalhesLivroPage;