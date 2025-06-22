import './Dashboard.css';

function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <main className="pageContent">{children}</main>
    </div>
  );
}

export default Dashboard;
