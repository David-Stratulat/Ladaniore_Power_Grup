import React from "react";
import { Link } from "react-router-dom";
import "../css/HamburgerMenu.css";

function HamburgerMenu() {
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
            <Link to="/servicii" className="hamburger-link">Servicii</Link>
            <Link to="/portofoliu" className="hamburger-link">Portofoliu</Link>
            <Link to="/contact" className="hamburger-link">Contact</Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default HamburgerMenu;
