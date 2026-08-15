import { Link } from 'react-router-dom';
import { createElement } from 'react';
import { ArrowUpRight, Wrench, Cable, ClipboardCheck } from 'lucide-react';
import '../css/CarduriServicii.css';
const services = [{ to: '/servicii/mentenanta', title: 'Mentenanță', text: 'Verificări, intervenții și funcționare sigură în timp.', icon: Wrench }, { to: '/servicii/instalare', title: 'Instalare', text: 'Execuție atentă pentru sisteme corect puse în funcțiune.', icon: Cable }, { to: '/servicii/consultanta', title: 'Consultanță', text: 'Recomandări tehnice clare pentru decizii bine fundamentate.', icon: ClipboardCheck }];
function CarduriServicii() { return <section className="services-section"><div className="services-title"><span>DOMENII DE EXPERTIZĂ</span><h2>Servicii gândite pentru siguranță.</h2></div><div className="services-grid">{services.map(({to, title, text, icon}) => <Link key={title} to={to} className="service-card">{createElement(icon, { size: 27 })}<h3>{title}</h3><p>{text}</p><span>Detalii <ArrowUpRight size={16}/></span></Link>)}</div></section>; }
export default CarduriServicii;
