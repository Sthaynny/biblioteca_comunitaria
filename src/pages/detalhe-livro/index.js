import './style.css';

import { editarLivro, getLivros } from '../../services/api';
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
    const handleSubmit = async (e, titulo, descricao, autor, base64) => {
        e.preventDefault();
        try {
            setLoading(true)
            await editarLivro(id, titulo, descricao, autor, base64)
            alert('Livro Criado com sucesso')

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

    useEffect(() => {
        getLivro()
    }, []);


    const Body = () => {
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