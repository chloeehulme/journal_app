import './Navbar.css';

function Navbar({ children }) {
  return (
    <nav className="navbar">
        { children }
    </nav>
  );
}

export default Navbar;
