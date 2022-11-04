import React, { useContext } from 'react';

import { AuthContext } from "../../context/auth";

const EmprestimoPage = () => {


    const { logout, authenticated } = useContext(AuthContext)
    const handleLogout = (e) => {
        logout()
    }
    return (
        <div>
            <h2>Meus emprestimos</h2>
            <ul>
                <li>item 1</li>
                <li>item 1</li>
                <li>item 1</li>
            </ul>
            <p>
                {String(authenticated)}
            </p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default EmprestimoPage;