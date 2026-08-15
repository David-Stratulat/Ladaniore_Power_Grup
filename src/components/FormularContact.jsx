import '../css/FormularContact.css';
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function FormularContact() {
  const [state, handleSubmit] = useForm("xbdqkjzl");

  if (state.succeeded) {
    return <p className="success-msg">Mulțumim! Mesajul tău a fost trimis.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form compact">

      <div className="row">
        <div className="field">
          <label>Prenume</label>
          <input type="text" name="firstName" required />
        </div>

        <div className="field">
          <label>Nume</label>
          <input type="text" name="lastName" required />
        </div>
      </div>

      <div className="field">
        <label>Email</label>
        <input type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="field">
        <label>Telefon (opțional)</label>
        <input type="tel" name="phone" />
      </div>

      <div className="field">
        <label>Mesaj</label>
        <textarea name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting}>
        Trimite
      </button>
    </form>
  );
}

export default FormularContact;
