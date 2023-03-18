import { useState } from "react";
import "./Contact.css";

const Contact = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const contactForm = { name, email, message };
    fetch("http://localhost:9000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });
  };

  return (
    <div className="contact__container">
      <h1 className="contact__header">Kontakta oss</h1>
      <p className="contact__body">
        Fyll i formuläret nedan så hör vi av oss så fort som möjligt!
      </p>
      <form className="contact__form" onSubmit={sendMessage}>
        <fieldset className="contact_fieldset">
          <legend></legend>
          <label htmlFor="name">Namn</label>
          <input
            className="contact__control"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            className="contact__control"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Meddelande</label>
          <textarea
            className="contact__control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <input className="contact__submit" type="submit" value="Skicka" />
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
