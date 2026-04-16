import text from "../assets/text.png";
import "../css/ServiceType.css";

const servicii = [
    "instalații alimentare cu energie electrică",
    "instalații pentru distribuția de energie electrică",
    "împământări",
    "instalații electrice de automatizare",
    "instalații termice și sanitare",
    "instalații detectie și stingere incendii",
    "instalații detecție incendiu",
    "instalații de supraveghere video",
    "instalații antiefracție"
  ];

  function ServiceType() {
    return (
      <section className="servicii-section">

        <div className="servicii-left">
          <h2>Răspundem rapid fiecărei solicitări</h2>

          <p>
            Echipa noastră de specialiști execută servicii de instalații complete,
            de la instalații electrice industriale și rezidențiale la instalații
            termice și sanitare.
          </p>

          <ul>
            {servicii.map((serviciu, index) => (
              <li key={index}>{serviciu};</li>
            ))}
          </ul>
        </div>

        <div className="servicii-right">
          <img src={text} alt="serviciu" className="img1" />
          <img src={text} alt="serviciu" className="img2" />
          <img src={text} alt="serviciu" className="img3" />
        </div>

      </section>
      )
    }

export default ServiceType;