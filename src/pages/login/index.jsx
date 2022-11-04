import "./style.css";

import React, { useContext, useState } from 'react';

import { AuthContext } from "../../context/auth";

const LoginPage = () => {
 

    const {authenticated, login} = useContext(AuthContext)
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {user, senha, authenticated})
        login(user, senha);
    }
    return (
        <div>
            <div id="login">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div class="field">
                        <p>
                            <label for="username">Usuario: </label>
                            <input id="username" name="username" required="required" type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
                        </p>
                    </div>


                    <div class="field">
                        <p>
                            <label for="password">Senha:</label>
                            <input id="password" name="password" required="required" type="password" placeholder="ex. senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </p>
                    </div>
                    <div class="actions">
                        <button type="submit" >Entrar</button>
                    </div>
                    <p class="link">
                        Ainda não tem conta?
                        <a href="">Cadastre-se</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;