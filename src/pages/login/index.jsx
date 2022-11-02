import "./style.css";

import React, { useState } from 'react';

const LoginPage = () => {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState("");
    const handleSubmit = (e) => {
        e.preventdefault()

        console.log("sy=ubnit", {user, senha})
    }
    return (
        <div>
            <div id="login">
                <form method="post" action="">
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
                        <button type="submit" onSubmit={handleSubmit}>Entrar</button>
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