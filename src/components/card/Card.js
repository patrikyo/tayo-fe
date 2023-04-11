import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import followUp from "../../assets/followUp.jpg";

import { useEffect, useState } from "react";

const Card = (props) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    choseIcon();
  }, [icon]);

  const choseIcon = () => {
    switch (props.icon) {
      case "faWrench":
        setIcon(faWrench);
        break;
      case "faUsersLine":
        setIcon(faUsersLine);
        break;
      case "faNoteSticky":
        setIcon(faNoteSticky);
        break;
      default:
        return null;
    }
  };
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
          <FontAwesomeIcon icon={icon} size="3x" style={{ color: "#676776" }} />
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
                ? "btn card__button--light"
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
