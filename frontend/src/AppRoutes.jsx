import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';

function HomePage() {
  return <h1>Hello World from HomePage</h1>;
}

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
