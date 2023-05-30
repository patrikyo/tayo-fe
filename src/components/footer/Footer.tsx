import "./Footer.scss";
import React from 'react';

const Footer = function (): JSX.Element {
  return (
    <div className="footer">
      <div className="footer__about-container">
        <h2 className="footer__header">Om oss</h2>
        <div className="footer__body">
          Välkommen till vårt hisskonsultföretag, där vi erbjuder personliga och
          skräddarsydda tjänster för att hjälpa dig att fatta välgrundade beslut
          om dina vertikala transportbehov. Som ett enmansbolag kan vi ge dig
          den individuella uppmärksamhet och expertis du förtjänar.
        </div>
      </div>
      <div className="footer__socialmedia-container">
        <h2 className="footer__header">Sociala medier</h2>

        <div className="footer__body">
          <ul className="footer__list">
            <li>
              <a className="footer__link" href="www.facebook.com">
                <img
                  src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a0b47b9311e_social-03.svg"
                  width="20"
                  alt=""
                  className="footer__image"
                />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a className="footer__link" href="www.google.com">
                <img
                  src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a19f9b93130_social-06.svg"
                  width="20"
                  alt=""
                  className="footer__image"
                />
                <span>google</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
