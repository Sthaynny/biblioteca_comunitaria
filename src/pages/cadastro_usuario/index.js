import '../../styles/global.css';
import './style.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { cadastrarUsuario } from '../../services/api';

const CadastroUsuarioPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            const response = await cadastrarUsuario(username, email, senha)
            if (response) {
                alert('Cadastro Relizado!!')
            } else {
                alert('Ocorreu um erro ao cadastrar usuario!!')
            }
            navigate('/login')
        } catch (error) {
            alert(error)
        }

        
    }
    return (
        <div>
            <div id='cadastro-usuario'>

                <form >

                    <h2>Cadastro Usuario</h2>
                    < div className="field">

                        <h1 id='titulo_input'>Username:</h1>
                        <input id="input_text" name="username" required="required" type="text" placeholder="Ex: jonny" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    < div className="field">

                        <h1 id='titulo_input'>Email:</h1>
                        <input id="input_text" name="email" type="text" placeholder="Ex: jonny" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="field">
                        <h1 id='titulo_input'>Senha:</h1>
                        <input id="input_text" name="senha" required="required" type="password" placeholder="*********" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className='padding-vertical' id='botoes-bottom'>
                        <Link id='primario' onClick={handleSubmit}>Cadastrar</Link>
                        <Link id='terciario' className='padding-botao-sair' to='/login'>Sair</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroUsuarioPage;