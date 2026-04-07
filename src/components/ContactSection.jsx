import {Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import "../css/ContactSection.css"


function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-card">
      <div className="quick-contact">
        <h3>Contact</h3>

        <p className="contact-item">
          <Mail size={18} />
          office@ladaniore.ro
        </p>

        <p className="contact-item">
          <Phone size={18} />
          +40 123 456 789
        </p>

        <div className="contact-item">
          <MapPin size={18} />
          București, România
        </div>
      </div>

      <div className="social-media-contact">
        <h3>social media</h3>

        <Link to="/" className="contact-link">
        Acasă
        </Link>

        <Link to="/despre-companie" className="contact-link">
        Despre companie
        </Link>

        <Link to="/contact" className="contact-link">
        Contact
        </Link>
      </div>
      <div className="servicii-contact">
        <h3> Servicii</h3>
        <Link to="/servicii/consultanta" className="servicii-link">
        Servicii de consultanta
        </Link>
        <Link to="/servicii/instalare" className="servicii-link">
        Servicii de instalare
        </Link>
        <Link to="/servicii/mentenanta" className="servicii-link">
        Servicii de mentenanta
        </Link>
      </div>
      </div>

    </section>
  );
}

export default ContactSection;