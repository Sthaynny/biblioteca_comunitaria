import "./style.css";

import React, { useContext, useState } from 'react';

import { AuthContext } from "../../context/auth";

const LoginPage = () => {


    const { login } = useContext(AuthContext)
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        login(user, senha);
    }
    return (
        <div>
            <div id="login">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="field">
                        <p>
                            <label for="username">Usuario: </label>
                            <input id="username" name="username" required="required" type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
                        </p>
                    </div>


                    <div className="field">
                        <p>
                            <label for="password">Senha:</label>
                            <input id="password" name="password" required="required" type="password" placeholder="ex. senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </p>
                    </div>
                    <div className="actions">
                        <button type="submit" >Entrar</button>
                    </div>
                    <p className="link">
                        Ainda não tem conta?
                        <a href=""> Cadastre-se</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;