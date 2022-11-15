import './style.css';

import React, { useEffect, useState } from 'react';

import { HeaderApp } from '../components/header';
import Livro from '../components/livro';
import Loader from '../components/loading';
import { getLivros } from '../../services/api';

const HomePage = () => {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => { 
            const respose = await getLivros(); 
            setLivros(respose.data)
            setLoading(false)
        })()
    }, []);


    if (loading) {
        return <div>
            <HeaderApp />
            <div className='loading'>
                <Loader />
            </div>
        </div>
    } else
        return (
            <div>
                <HeaderApp />
                <div className='lista-livros'>
                    {
                        livros.map((livro) => (
                            <Livro livro={livro}></Livro>
                        ))
                    }
                </div>
            </div>

        );
}

export default HomePage;