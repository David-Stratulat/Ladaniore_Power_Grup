import React from "react";
import { Link } from "react-router-dom";
import "../css/ServicesBtn.css"; 
import text from "../assets/text.png";

function ServicesBtn() {
  return (
   <section className="services-section">
  <h2>Servicii de calitate pentru fiecare client</h2>

  <div className="services-grid">

    <Link to="/servicii/mentenanta" className="service-card">
      <img src={text} alt="serviciu" />
      <h3>Construcții</h3>
    </Link>

    <Link to="/servicii/instalare" className="service-card">
      <img src={text} alt="serviciu" />
      <h3>Instalare</h3>
    </Link>

    <Link to="/servicii/consultanta" className="service-card">
      <img src={text} alt="serviciu" />
      <h3>Consultanță</h3>
    </Link>

  </div>
</section>
  );
}

export default ServicesBtn;