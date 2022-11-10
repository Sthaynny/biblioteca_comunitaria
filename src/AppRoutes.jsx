import { AuthContext, AuthProvider } from './context/auth';
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';

import CadastroPage from './pages/cadastro';
import DetalhesLivroPage from './pages/detalhe-livro';
import EmprestimoPage from './pages/emprestimos';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { useContext } from 'react';

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);
        if (!authenticated) {
            return <Navigate to="/" />
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
                    <Route exact path='/cadastro-livro' element={<Private><CadastroPage /></Private>} />
                    <Route exact path='/detalhe-livro/:id' element={ <Private><DetalhesLivroPage /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes 