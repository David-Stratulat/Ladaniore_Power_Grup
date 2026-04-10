import ContactSection from '../components/ContactSection';  
import "../css/Home.css"
import HomePageImg from "../assets/HomePageImg.jpeg"
import Qualities from "../components/Qualities"


function Home() {
  return (
    <>
    <img src={HomePageImg} alt="Home Page" className="home-image" />
    <Qualities/>

    <div className="home">
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main landing page of our application.</p>
    </div>


  <ContactSection />
</>
  );
}
export default Home;