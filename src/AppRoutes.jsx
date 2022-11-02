import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';

import { AuthProvider } from './context/auth';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { useState } from 'react';

const AppRoutes = () => {
    const [token, setToken]= useState(null)
    const login = (username, senha)=>{
        console.log('login', {username, senha})
        setToken( 'asd')
    }
    const logout = ()=>{
        console.log("logout")
    }
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/' element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes