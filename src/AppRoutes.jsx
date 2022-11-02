import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/login';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<LoginPage />} /> 
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes