import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import text from "../assets/text.png"

function NavBar() {
  const currentLocation = useLocation();

  const isActive = (path) => currentLocation.pathname === path;

  return (
    <><nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <img src={text} alt="Text Logo" className="navbar-text" />
      </div>

    

    
    <div className="navbar-links">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Acasa</Link>
        <Link to="/despre-companie" className={`nav-link ${isActive('/despre-companie') ? 'active' : ''}`}>Despre companie</Link>
        <Link to="/servicii" className={`nav-link ${isActive('/servicii') ?'active': ''}`}>Servicii</Link>
        <Link to="/portofoliu" className={`nav-link ${isActive('/portofoliu') ? 'active' : ''}`}>Portofoliu</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>

      </div>  
        
    </nav></>
  )
}
export default NavBar;
  