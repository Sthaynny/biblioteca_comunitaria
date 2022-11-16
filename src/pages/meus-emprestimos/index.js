import './style.css';

import React, { useEffect, useState } from 'react';

import EmprestimoComponent from '../components/emprestimo';
import { HeaderApp } from '../components/header';
import Loader from '../components/loading';
import { getMeusEmprestimo } from '../../services/api';

const MeusEmprestimosPage = () => {
    const [emprestimos, setEmprestimos] = useState([]);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const respose = await getMeusEmprestimo();
                setList(respose.data) 
                setLoading(false)
            } catch (error) {
                alert(error)
            }
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
                <div className='lista-emprestimos'>
                    {
                        list[0].emprestimo_set.map((emprestimo) => (
                            <EmprestimoComponent emprestimo={emprestimo}></EmprestimoComponent>
                        ))
                    }
                </div>
            </div>

        );
}

export default MeusEmprestimosPage;