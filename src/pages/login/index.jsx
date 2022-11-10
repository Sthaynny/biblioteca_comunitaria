import "../../styles/global.css";
import "./style.css";

import React, { useContext, useState } from 'react';

import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import { LogoApp } from "./components/logo_app";

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
            <LogoApp />
            <div id="login">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="field">
                        <p> 
                            <input id="input_text" name="username" required="required" type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
                        </p>
                    </div>

                    <div className="field">
                        <p> 
                            <input id="input_text" name="password" required="required" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </p>
                    </div>
                    <div className="actions">
                        <button type="submit" id="primario">Entrar</button>
                        <br />
                        <p id="ou">
                            ou
                        </p> 
                        <Link id="terciario">Cadastre-se</Link> 
                    </div> 
                </form>
            </div>
        </div>
    );
}

export default LoginPage;