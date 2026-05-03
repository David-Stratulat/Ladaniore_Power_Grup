import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import text from "../assets/text.png";
import "../css/Navbar.css";
import Flydown from "./Flydown";
import HamburgerMenu from "./HamburgerMenu";

function NavBar() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname.startsWith(path);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <img src={text} alt="Text Logo" className="navbar-text" />
      </div>

      <div className="mobile-menu">
        <HamburgerMenu />
      </div>

      <div className="desktop-menu">
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Acasa
          </Link>

          <Link
            to="/despre-companie"
            className={`nav-link ${
              isActive("/despre-companie") ? "active" : ""
            }`}
          >
            Despre companie
          </Link>

          <div className="nav-item-with-dropdown">
            <Link
              to="/servicii"
              className={`nav-link ${
                isActive("/servicii") ? "active" : ""
              }`}
            >
              Servicii
              <FaChevronDown className="chevron-icon" />
            </Link>

            <Flydown>
              <Link to="/servicii/mentenanta" className="flydown-link">
                Mentenanță
              </Link>
              <Link to="/servicii/instalare" className="flydown-link">
                Instalare
              </Link>
              <Link to="/servicii/consultanta" className="flydown-link">
                Consultanță
              </Link>
            </Flydown>
          </div>

          <Link
            to="/portofoliu"
            className={`nav-link ${isActive("/portofoliu") ? "active" : ""}`}
          >
            Portofoliu
          </Link>

          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;