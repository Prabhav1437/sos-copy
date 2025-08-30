import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">SOS Emergency</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/qr">QR Code</Link></li>
      </ul>
    </nav>
  );
}
