import Navbar from '../Navbar/Navbar.jsx';
import './Dashboard.css';

function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <Navbar />
      <main className="pageContent">{children}</main>
    </div>
  );
}

export default Dashboard;
