import { createElement } from 'react';
import { ShieldCheck, Zap, Handshake } from 'lucide-react';
import '../css/Avantaje.css';

const calitati = [
  { titlu: 'Profesionalism', icon: ShieldCheck, text: 'Lucrări executate atent, cu respect pentru standarde și siguranță.' },
  { titlu: 'Promptitudine', icon: Zap, text: 'Comunicare clară, intervenții rapide și respectarea termenelor stabilite.' },
  { titlu: 'Parteneriat', icon: Handshake, text: 'Soluții adaptate proiectului și suport de la prima discuție la final.' }
];
function Avantaje() { return <section className="calitati-section"><div className="section-heading"><span>DE CE NOI</span><h2>Un partener pe care te poți baza.</h2><p>Abordăm fiecare lucrare cu rigoare tehnică, transparență și grijă pentru rezultat.</p></div><div className="calitati-container">{calitati.map(({ titlu, icon, text }, index) => <article key={titlu} className="calitate-card"><span className="card-index">0{index + 1}</span><div className="quality-icon">{createElement(icon, { size: 25 })}</div><h3>{titlu}</h3><p>{text}</p></article>)}</div></section>; }
export default Avantaje;
