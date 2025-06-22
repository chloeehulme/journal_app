import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import HomePage from './pages/HomePage.jsx';

function AppRoutes() {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Dashboard>
  );
}

export default AppRoutes;
