import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function AppRoutes() {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<PrivateRoute> <HomePage /> </PrivateRoute>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Dashboard>
  );
}

export default AppRoutes;
