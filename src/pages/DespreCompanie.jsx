import Footer from '../components/Footer';
import RA1 from '../assets/RA1.jpeg';

import "../css/DespreCompanie.css";

function DespreCompanie() {
  return (
    <>
   <section class="about-company">
    <div class="container">
        <div class="about-content">
            <span class="subtitle">Despre noi</span>
            <h2>LADANIORE POWER GRUP SRL</h2>

            <p>
                LADANIORE POWER GRUP SRL este o companie orientată către calitate,
                profesionalism și dezvoltare continuă, având ca obiectiv principal
                oferirea unor servicii și soluții adaptate nevoilor fiecărui client.
            </p>

            <p>
                Ne bazăm activitatea pe seriozitate, transparență și respectarea
                celor mai înalte standarde profesionale. Fiecare proiect este
                tratat cu responsabilitate, iar satisfacția clienților reprezintă
                prioritatea noastră.
            </p>

            <p>
                Prin implicare, experiență și dorința permanentă de perfecționare,
                construim parteneriate durabile și oferim servicii de înaltă
                calitate, contribuind la dezvoltarea unui mediu de afaceri bazat
                pe încredere și profesionalism.
            </p>

            <div class="about-stats">
                <div class="item">
                    <h3>Profesionalism</h3>
                    <span>Servicii de calitate</span>
                </div>

                <div class="item">
                    <h3>Încredere</h3>
                    <span>Parteneriate durabile</span>
                </div>

                <div class="item">
                    <h3>Responsabilitate</h3>
                    <span>Respect pentru clienți</span>
                </div>
            </div>
        </div>
    </div>
</section> 
<section class="certificate-section">
    <div class="container">

        <div class="certificate-image">
            <img src={RA1} alt="Certificat de Reputație în Afaceri - LADANIORE POWER GRUP SRL" />
        </div>

        <div class="certificate-content">
            <span class="subtitle">Recunoaștere</span>

            <h2>Certificat de Reputație în Afaceri</h2>

            <p>
                LADANIORE POWER GRUP SRL a fost distinsă cu
                <strong>Certificatul de Reputație în Afaceri</strong>,
                o recunoaștere acordată companiilor care demonstrează
                profesionalism, seriozitate și o imagine pozitivă în mediul de afaceri.
            </p>

            <p>
                Această certificare reflectă încrederea de care ne bucurăm în
                relația cu clienții și partenerii noștri și confirmă angajamentul
                nostru pentru servicii de cea mai bună calitate.
            </p>

            <a href="#" class="btn-primary">
                Află mai multe
            </a>
        </div>

      </div>
    </section>
    <Footer />
    </>
  )
}
export default DespreCompanie
