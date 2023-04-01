import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div
      className={`${
        props.theme === "light" ? "card__container" : "card__container--dark"
      }`}
    >
      {props.icon.length > 0 && (
        <div className="card__icon-container">
          <FontAwesomeIcon icon={faUsersLine} />
        </div>
      )}
      {props.imgUrl.length > 0 && (
        <img className="card__image" src={props.imgUrl} alt="" />
      )}
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__text">{props.description}</p>
        {props.showButton && (
          <a
            href="www.google.se"
            className={`card__button ${
              props.theme === "light" ? "btn btn-primary" : "card__button--dark"
            }  `}
          >
            {`Läs mer om ${props.title}`}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
