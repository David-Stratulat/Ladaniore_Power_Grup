import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/HamburgerMenu.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function HamburgerMenu() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>

      <aside className="sidebar">
        <div className="hamburger-content">
          <nav>
            <Link to="/" className="hamburger-link">Acasa</Link>
            <Link to="/despre-companie" className="hamburger-link">Despre companie</Link>
            <div className="hamburger-dropdown-row">
                <Link to="/servicii" className="hamburger-main-link">
                  Servicii
                </Link>

                <button
                  type="button"
                  className="hamburger-chevron-btn"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {servicesOpen ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </button>
              </div>
              <div className={`hamburger-submenu ${servicesOpen ? "open" : ""}`}>
                <Link to="/servicii/mentenanta" className="hamburger-sublink">
                  Mentenanță
                </Link>

                <Link to="/servicii/instalare" className="hamburger-sublink">
                  Instalare
                </Link>

                <Link to="/servicii/consultanta" className="hamburger-sublink">
                  Consultanță
                </Link>
              </div>
            <Link to="/portofoliu" className="hamburger-link">Portofoliu</Link>
            <Link to="/contact" className="hamburger-link">Contact</Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default HamburgerMenu;
