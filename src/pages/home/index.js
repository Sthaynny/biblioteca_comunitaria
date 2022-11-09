import './style.css';

import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from "../../context/auth";
import { HeaderApp } from '../components/header';
import Livro from '../components/livro';
import Loader from '../components/loading';
import { getLivros } from '../../services/api';

const HomePage = () => {
    const [livros, setLivros] = useState([
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
        { titulo: 'Sporting Goods', imagem: 'https://i.pinimg.com/736x/9e/96/6b/9e966b0878d6f1e0704141b16d2d001b.jpg', },
    ]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            const respose = await getLivros();
            setLivros(respose.data)
            setLoading(false)
            console.log(respose.data);
        })()
    }, []);

    const { authenticated } = useContext(AuthContext)

    if (authenticated) {
        return <div>
            <HeaderApp />
            <div className='loading'>
                <Loader />
            </div>
        </div>
    }
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