import { AuthContext, AuthProvider } from './context/auth';
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';

import CadastroPage from './pages/cadastro';
import EmprestimoPage from './pages/emprestimos';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { useContext } from 'react';

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);
        if (!authenticated) {
            return <Navigate to="/home" />
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
                    <Route exact path='/cadastro-livro' element={<CadastroPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes 