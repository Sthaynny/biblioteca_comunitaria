import './style.css';

import { Link, useNavigate, useParams } from "react-router-dom";
import { editarLivro, getLivros } from '../../services/api';
import { useEffect, useState } from "react";

import { AuthContext } from '../../context/auth';
import { BodyCadastro } from '../cadastro';
import { HeaderApp } from "../components/header";
import Loader from '../components/loading';
import { excluirLivro } from '../../services/api';
import { useContext } from 'react';

const DetalhesLivroPage = () => {
    const { authenticated , superUSer} = useContext(AuthContext);

    const { id } = useParams();
    const navigate = useNavigate()
    const [edicao, setEdicao] = useState(false);
    const [livro, setLivro] = useState();
    const [loading, setLoading] = useState(true);
    const handleSubmit = async (e, titulo, descricao, autor, base64) => {
        e.preventDefault();
        try {
            setLoading(true)
            await editarLivro(id, titulo, descricao, autor, base64)
            alert('Livro editado com sucesso')

        } catch (error) {
            alert(error)
        }

        setEdicao(false)
        setLoading(false)
        getLivro()
    }

    async function getLivro() {
        try {
            const respose = await getLivros(id);
            setLivro(respose.data);
            setLoading(false)
        } catch (error) {
            alert(error)
        }
    };
    async function deleteLivro(e) {
        setLoading(true)
        e.preventDefault();
        try {
            await excluirLivro(id);
            setLoading(false)
            navigate('/')
            alert('Livro excluido com sucesso!')
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        getLivro()
    }, []);





    const Body = () => {
        const Buttons = () => {
            if (authenticated && superUSer) {
                return <div id='botoes-bottom'>
                    <button type='submit' id='primario' onClick={(e) => {
                        e.preventDefault();
                        setEdicao(true);
                    }}>Editar</button>
                    <div id='espacamento-botoes'>

                        <Link type='submit' className='secundario-red' onClick={deleteLivro
                        }>Excluir</Link>
                    </div>
                </div>
            } else {
                return <div></div>
            }
        }
        if (loading) {
            return <div className='loading'>
                <Loader />
            </div>
        } else {
            if (edicao) {
                return <BodyCadastro handleSubmit={handleSubmit} titulo={livro.titulo} descricao={livro.descricao} autor={livro.autor} base64={livro.base64} />
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

                        <Buttons />
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