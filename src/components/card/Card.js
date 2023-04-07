import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div
      className={`card__container ${
        props.size === "small"
          ? "card__container--sm"
          : props.size === "medium"
          ? "card__container--md"
          : "card__container--lg"
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
            href={`#${props.sectionId}`}
            className={`card__button ${
              props.theme === "light"
                ? "btn  card__button--light"
                : "card__button--dark"
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
