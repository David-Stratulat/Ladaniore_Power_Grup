import ContactSection from '../components/ContactSection';  
import "../css/Portfolio.css";
import { projects } from "../components/Projects";


function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <div className="project-map">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
            <h3>{project.title}</h3>
            <p>{project.location}</p>
          </div>
        </div>
      ))}
    </div>
    <ContactSection />
    </div>
  );
};

export default Portfolio;