import { Mail, MapPin, Phone } from 'lucide-react';
import FormularContact from '../components/FormularContact';
import '../css/Contact.css';
function Contact() { return <main className="contact-page"><section className="contact-hero"><div className="contact-copy"><span>CONTACT</span><h1>Spune-ne despre<br /><em>proiectul tău.</em></h1><p>Indiferent dacă ai nevoie de o intervenție, o ofertă sau o discuție tehnică, echipa noastră îți răspunde cu o soluție clară.</p><div className="contact-details"><a href="tel:0742042237"><Phone size={19}/><div><small>Telefon</small>0742 042 237</div></a><a href="mailto:office@ladaniore.ro"><Mail size={19}/><div><small>Email</small>office@ladaniore.ro</div></a><p><MapPin size={19}/><span><small>Locație</small>București, România</span></p></div></div><div className="form-panel"><p className="form-label">TRIMITE UN MESAJ</p><h2>Suntem aici să ajutăm.</h2><FormularContact /></div></section></main>; }
export default Contact;
