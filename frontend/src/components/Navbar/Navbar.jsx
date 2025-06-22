import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h2>MyDashboard</h2>
      </div>
      <div className="right">
        <button className="iconButton" aria-label="Notifications">
          🔔
        </button>
        <div className="user">Chloe</div>
      </div>
    </nav>
  );
}

export default Navbar;
