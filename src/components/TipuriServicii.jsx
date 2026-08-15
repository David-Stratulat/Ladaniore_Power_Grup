import { Check } from 'lucide-react';
import '../css/TipuriServicii.css';
import HomePageImg from '../assets/HomePageImg.jpeg';
const servicii = ['Instalații de alimentare și distribuție energie electrică', 'Împământări și instalații electrice de automatizare', 'Instalații termice și sanitare', 'Detectare și stingere incendii', 'Sisteme de supraveghere video și antiefracție'];
function TipuriServicii() { return <section className="servicii-section"><div className="servicii-left"><span className="section-kicker">CE FACEM</span><h2>Soluții complete, de la plan la execuție.</h2><p>Proiectăm și executăm instalații fiabile, pentru spații în care contează confortul, continuitatea și siguranța.</p><ul>{servicii.map(serviciu => <li key={serviciu}><Check size={17}/>{serviciu}</li>)}</ul></div><div className="servicii-right"><img src={HomePageImg} alt="Lucrări de instalații realizate profesionist" /><div className="service-photo-caption"><span>10+</span><p>ani de experiență<br />în instalații</p></div></div></section>; }
export default TipuriServicii;
