import { FormEvent, useState } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "../../models/contactForm";

const Contact = function (): JSX.Element {
  const [name, setName]: [string, Function] = useState<string>("");
  const [email, setEmail]: [string, Function] = useState<string>("");
  const [message, setMessage]: [string, Function] = useState<string>("");
  const [loading, setLoading]: [boolean, Function] = useState<boolean>(false);
  const [sent, setSent]: [(null | boolean), Function] = useState<null>(null);

  const sendMessage = (e: FormEvent<HTMLFormElement> ): void => {
    setLoading(true);
    e.preventDefault();
    const contactForm: ContactForm = { name, email, message };
    fetch("https://tayo-api-service.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    })
      .then((res: Response) => {
        setLoading(false);

        if (res.status === 200) {
          setSent(true);
        } else {
          setSent(false);
        }
      })
      .catch((err: Error) => {
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
        <fieldset className="contact__fieldset">
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
            <input
              className="contact__fieldset-submit"
              type="submit"
              value="Skicka"
            />
          )}

          {sent && (
            <div className="contact__fieldset-verification-flex-wrapper">
              <div className="contact__fieldset-verification-icon-container">
                <FontAwesomeIcon
                  className="contact__fieldset-icon--check"
                  icon={faCheckCircle}
                />
              </div>

              <p className="contact__fieldset-verification-desc">
                Tack för kontaktuppgifterna, vi återkommer så snabbt vi kan
              </p>
            </div>
          )}

          {sent === false && (
            <div className="contact__fieldset-verification-flex-wrapper">
              <div className="contact__fieldset-verification-icon-container">
                <FontAwesomeIcon
                  className="contact__fieldset-icon--failed"
                  icon={faCircleExclamation}
                />
              </div>

              <p className="contact__fieldset-verification-desc">
                Teknisk fel uppstod, försök gärna att skicka kontaktuppgifterna
                igen{" "}
              </p>
            </div>
          )}

          {loading && (
            <div className="contact__fieldset-spinner-container">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
