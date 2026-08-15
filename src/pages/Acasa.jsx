import Footer from '../components/Footer';
import '../css/Home.css';
import HomePageImg from '../assets/HomePageImg.jpeg';
import Avantaje from '../components/Avantaje';
import CarduriServicii from '../components/CarduriServicii';
import TipuriServicii from '../components/TipuriServicii';

function Acasa() {
  return <main className="home-page">
    <section className="home-hero">
      <img src={HomePageImg} alt="Instalații electrice realizate de Ladaniore Power Grup" className="home-image" />
      <div className="home-overlay" />
      <div className="home-hero-content">
        <span className="home-eyebrow">LADANIORE POWER GRUP · BUCUREȘTI</span>
        <h1>Energia corectă pentru <span>spațiul tău.</span></h1>
        <p>Instalații electrice, termice și sisteme de siguranță executate responsabil, de la proiect până la punerea în funcțiune.</p>
        <div className="home-hero-actions">
          <a href="tel:0742042237" className="home-primary-btn">Sună acum <span>0742 042 237</span></a>
          <a href="#services" className="home-secondary-btn">Descoperă serviciile <b>↓</b></a>
        </div>
      </div>
      <div className="hero-bottom-note"><span>01</span> Soluții tehnice pentru proiecte rezidențiale și comerciale</div>
    </section>
    <section className="home-content-section"><Avantaje /></section>
    <section id="services" className="home-content-section"><TipuriServicii /><CarduriServicii /></section>
    <Footer />
  </main>;
}
export default Acasa;
