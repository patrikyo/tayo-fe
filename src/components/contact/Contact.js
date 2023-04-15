import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Contact = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);

  const sendMessage = (e) => {
    setLoading(true);
    e.preventDefault();
    const contactForm = { name, email, message };
    fetch("https://tayo-api-service.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    })
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
          setSent(true);
        } else {
          setSent(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setSent(false);
      });
  };

  return (
    <div className="contact">
      <h1 className="contact__header">Kontakta oss</h1>
      <p className="contact__body">
        Fyll i formuläret nedan så hör vi av oss så fort som möjligt!
      </p>
      <form className="contact__form" onSubmit={sendMessage}>
        <fieldset className="contact_fieldset">
          <legend></legend>
          <label htmlFor="name">Namn</label>
          <input
            required
            className="contact__control"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            required
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

          {!loading && !sent && (
            <input className="contact__submit" type="submit" value="Skicka" />
          )}

          {sent && (
            <div className="contact__verification">
              <div className="contact__verification-icon-container">
                <FontAwesomeIcon
                  className="contact__check-icon"
                  icon={faCheckCircle}
                />
              </div>

              <p className="mt-3 text-center">
                Tack för kontaktuppgifterna, vi återkommer så snabbt vi kan
              </p>
            </div>
          )}

          {sent === false && (
            <div className="contact__verification">
              <div className="contact__verification-icon-container">
                <FontAwesomeIcon
                  className="contact__failed-icon"
                  icon={faCircleExclamation}
                />
              </div>

              <p className="mt-3 text-center">
                Teknisk fel uppstod, försök gärna att skicka kontaktuppgifterna
                igen{" "}
              </p>
            </div>
          )}

          {loading && (
            <div className="contact__spinner-container">
              <div className=" spinner-border text-primary" role="status"></div>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
