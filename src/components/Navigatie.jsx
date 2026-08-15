import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo.png';
import text from '../assets/text.png';
import '../css/Navigatie.css';
import MeniuDerulant from './MeniuDerulant';
import MeniuMobil from './MeniuMobil';
function Navigatie() { const { pathname } = useLocation(); const active = path => pathname === path || (path !== '/' && pathname.startsWith(path)); return <nav className="navbar"><Link to="/" className="navbar-brand" aria-label="Ladaniore Power Grup - Acasă"><img src={logo} alt="" className="navbar-logo" /><img src={text} alt="Ladaniore Power Grup" className="navbar-text" /></Link><div className="mobile-menu"><MeniuMobil /></div><div className="desktop-menu"><div className="navbar-links"><Link to="/" className={`nav-link ${active('/') ? 'active' : ''}`}>Acasă</Link><Link to="/despre-companie" className={`nav-link ${active('/despre-companie') ? 'active' : ''}`}>Despre noi</Link><div className="nav-item-with-dropdown"><Link to="/servicii" className={`nav-link ${active('/servicii') ? 'active' : ''}`}>Servicii <FaChevronDown className="chevron-icon" /></Link><MeniuDerulant><Link to="/servicii/mentenanta" className="flydown-link">Mentenanță</Link><Link to="/servicii/instalare" className="flydown-link">Instalare</Link><Link to="/servicii/consultanta" className="flydown-link">Consultanță</Link></MeniuDerulant></div><Link to="/portofoliu" className={`nav-link ${active('/portofoliu') ? 'active' : ''}`}>Portofoliu</Link><Link to="/contact" className={`nav-link ${active('/contact') ? 'active' : ''}`}>Contact</Link></div></div></nav>; }
export default Navigatie;
