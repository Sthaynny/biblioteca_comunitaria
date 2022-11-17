import './style.css';

import React, { useEffect, useState } from 'react';

import { EmprestimoComponent } from '../components/emprestimo';
import { HeaderApp } from '../components/header';
import Loader from '../components/loading';
import { getEmprestimos } from '../../services/api';

const MeusEmprestimosPage = () => {
    const [emprestimos, setEmprestimos] = useState([]); 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const respose = await getEmprestimos();
                setEmprestimos(respose.data) 
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
                        emprestimos.map((emprestimo) => (
                            <EmprestimoComponent emprestimo={emprestimo}></EmprestimoComponent>
                        ))
                    }
                </div>
            </div>

        );
}

export default MeusEmprestimosPage;