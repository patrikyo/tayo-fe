import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faElevator } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { setNav } from '../../features/appSlice';

function Header(): JSX.Element {
  const app = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <div className={`header`}>
      {/* title starts */}
      <Link id="header__home-link" to="/">
        <div className="header__title-container">
          <h1>Tayo</h1>
          <FontAwesomeIcon className="header__icon--title" icon={faElevator} />
        </div>
      </Link>
      {/* title ends */}

      {/* navigation links start */}
      <div className="header__nav-container">
        {/* Btn only visible up to 540px starts */}
        <button className="header__nav-toggle" onClick={() => dispatch(setNav())}>
          <FontAwesomeIcon id="header__icon--bars" icon={faBars} />
        </button>
        {/* Btn only visible up to 540px ends */}

        <nav>
          <ul
            className={`header__nav-list  ${
              app.nav === true
                ? "header__nav-list--visible"
                : "header__nav-list--hide"
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