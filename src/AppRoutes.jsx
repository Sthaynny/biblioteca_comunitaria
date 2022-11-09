import { AuthContext, AuthProvider } from './context/auth';
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';

import EmprestimoPage from './pages/emprestimos';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { useContext } from 'react';
import Cadastro from './pages/cadastro'

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);
        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/meus-emprestimos' element={<Private><EmprestimoPage /></Private>} />
                    <Route exact path='/cadastro-livro' element={<Private><Cadastro /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes 