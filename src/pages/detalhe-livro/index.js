import './style.css';

import { useEffect, useState } from "react";

import { HeaderApp } from "../components/header";
import Loader from '../components/loading';
import { getLivros } from '../../services/api';
import { useParams } from "react-router-dom";

const DetalhesLivroPage = () => {
    const {id} = useParams();
    const [edicao, setEdicao] = useState(false);
    const [livro, setLivro] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => { 
            try {
                
                const respose = await getLivros(id); 
                setLivro(respose.data);
                setLoading(false)
            } catch (error) {
                
            } 
        })()
    }, []);


    const Body = () => {
        if(loading){
            return <Loader />   
        }
        return (
            <div className='body'>
                <div id='capa-livro'>
                    <img src={livro.base64}/>
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
            </div>
        )
    }

    return (
        <div>
            <HeaderApp />
            <Body />
        </div>
    )

}

export default DetalhesLivroPage;