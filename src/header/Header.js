import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faElevator } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header__container pt-3">
      <Link className="header__main-link" to="/">
        <div className="header_main-container">
          <h1>Tayo</h1>
          <FontAwesomeIcon className="header_icon" icon={faElevator} />
        </div>
      </Link>
      <nav>
        <ul className="header__navigation-links">
          <li>{<NavLink to="/">Hem</NavLink>}</li>
          <li>{<NavLink to="/contact">Kontakta</NavLink>}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
