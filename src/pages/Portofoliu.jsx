import Footer from '../components/Footer';
import '../css/Portofoliu.css';
import { proiecte } from '../components/Proiecte';


function Portofoliu() {
  return (
    <div className="portfolio-wrapper">
      <div className="project-map">
        {proiecte.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
            <h3>{project.title}</h3>
            <p>{project.location}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Portofoliu;
