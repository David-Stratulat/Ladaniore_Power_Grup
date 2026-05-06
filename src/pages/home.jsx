import ContactSection from "../components/ContactSection";
import "../css/Home.css";
import HomePageImg from "../assets/HomePageImg.jpeg";
import Qualities from "../components/Qualities";
import ServicesBtn from "../components/ServicesBtn";
import ServiceType from "../components/ServiceType";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <img src={HomePageImg} alt="Home Page" className="home-image" />

        <div className="home-overlay"></div>

        <div className="home-hero-content">
          <span className="home-eyebrow">
            Experiență · Calitate · Profesionalism
          </span>

          <h1>
            Servicii complete pentru <span>casa ta</span>
          </h1>

          <p>
            De la construcția unei case noi, până la cele mai mici detalii de
            amenajare — echipa noastră se ocupă de tot, cu seriozitate și
            rezultate de calitate.
          </p>

          <div className="home-hero-actions">
            <a href="tel:0742042237" className="home-primary-btn">
              Sună acum: 0742 042 237
            </a>

            <a href="#services" className="home-secondary-btn">
              Vezi serviciile
            </a>
          </div>
        </div>
      </section>

      <section className="home-content-section">
        <Qualities />
      </section>

      <section id="services" className="home-content-section">
        <ServiceType />
        <ServicesBtn />
      </section>

      <section id="contact" className="home-content-section">
        <ContactSection />
      </section>
    </main>
  );
}

export default Home;