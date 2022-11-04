import { AuthContext, AuthProvider } from './context/auth';
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';

import Emprestimos from './pages/emprestimos';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { useContext } from 'react';

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
                    <Route exact path='/meus-emprestimos' element={<Private><Emprestimos /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes 