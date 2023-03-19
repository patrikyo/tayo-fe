import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header__container container pt-3">
      <div className="row">
        <div className="col-10">
          <h1>tayo</h1>
        </div>
        <nav className="col-2">
          <ul className="header__navigation-links">
            <li>{<NavLink to="/">Hem</NavLink>}</li>
            <li>{<NavLink to="/contact">Kontakta</NavLink>}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
