import "./Header.css";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <div className="header__container container pt-3">
      <div className="row">
        <div className="col-10">
          <Link className="header__main-link" to="/">
            <h1>Tayo</h1>
          </Link>
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
