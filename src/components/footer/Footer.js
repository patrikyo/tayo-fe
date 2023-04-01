import "./Footer.css";
const Footer = function () {
  return (
    <>
      <div className="footer__container">
        <div className="footer__aboutUs">
          <h2 className="footer__header">Om oss</h2>
          <div className="footer__body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="footer__socialmedia">
          <h2 className="footer__header">Sociala medier</h2>

          <div className="footer__body">
            <ul className="footer_list">
              <li>
                <a className="footer__socialLink" href="www.facebook.com">
                  <img
                    src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a3b71b93135_social-18.svg"
                    width="20"
                    alt=""
                    className="footer_socialImage"
                  />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a className="footer__socialLink" href="www.google.com">
                  <img
                    src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a19f9b93130_social-06.svg"
                    width="20"
                    alt=""
                    className="footer_socialImage"
                  />
                  <span>google</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
