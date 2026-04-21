import ContactSection from '../components/ContactSection';  
import "../css/Home.css"
import HomePageImg from "../assets/HomePageImg.jpeg"
import Qualities from "../components/Qualities"
import ServicesBtn from '../components/ServicesBtn';
import ServiceType from "../components/ServiceType";


function Home() {
  return (
    <>
    <img src={HomePageImg} alt="Home Page" className="home-image" />
    <Qualities/>
    <ServiceType />
    <ServicesBtn/>
    <ContactSection />
  </>
  );
}
export default Home;