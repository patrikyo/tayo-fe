import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faElevator } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [navigation, setNavigation] = useState(false);

  return (
    <div className="header pt-3">
      {/** title */}
      <Link id="header__home-link" to="/">
        <div className="header__title-container">
          <h1>Tayo</h1>
          <FontAwesomeIcon className="header__icon" icon={faElevator} />
        </div>
      </Link>

      {/** navigation links */}
      <div>
        {/** Btn only visible up to 540px */}
        <button
          className="header__navigation-btn"
          onClick={() => setNavigation(!navigation)}
        >
          <FontAwesomeIcon id="header__bars-icon" icon={faBars} />
        </button>

        <nav>
          <ul
            className={`header__navigation-links  ${
              navigation === true
                ? "header__navigation-links--visible"
                : "header__navigation-links--hide"
            }`}
          >
            <li>{<NavLink to="/">Hem</NavLink>}</li>
            <li>{<NavLink to="/contact">Kontakta</NavLink>}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

// {
