import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <p className="logo">Blog Spot.</p>
      <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/beawriter">Be a writer</Link>
          </li>
          <li>
            <Link to="/talktous">Talk to us</Link>
          </li>
      </ul>
      <button>Write</button>
    </nav>
  );
}

export default Navbar;
