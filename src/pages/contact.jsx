import ContactSection from '../components/ContactSection';  
function Contact() {
    return (
        <>
        <div className="contact-container">
            <h1>Contactați-ne</h1>
            <p>Dacă aveți întrebări sau doriți să aflați mai multe despre serviciile noastre, nu ezitați să ne contactați. Suntem aici pentru a vă ajuta!</p>
            <ul>
                <li>Email: contact@ladaniore.ro</li>
                <li>Telefon: +40 123 456 789</li>
                <li>Adresă: Strada Exemplu, Nr. 10, București, România</li>
            </ul>
        </div>
        <ContactSection />
        </>
    );
}
export default Contact;