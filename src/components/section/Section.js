import Card from "../card/Card";
import "./Section.css";
const Section = (props) => {
  return (
    <div className={`section section--${props.section.theme}`}>
      <div className="container">
        <div
          className={`section__header ${
            props.section.theme === "light"
              ? "section__header--light"
              : "section__header--dark"
          }`}
        >
          {props.section.headingLevel === 2 ? (
            <h2 id={props.section.sectionId}>{props.section.header}</h2>
          ) : (
            <h3>{props.section.header}</h3>
          )}
        </div>
        {props.section.body.length > 0 && (
          <div className="section__body">
            <p>{props.section.body} </p>
          </div>
        )}
        <ul className="section__list">
          {props.section.cards?.map((card, index) => (
            <li key={index}>
              <Card
                imgUrl={card.img}
                title={card.title}
                description={card.body}
                theme={props.section.theme}
                showButton={card.button}
                icon={card.icon}
                sectionId={card.sectionId}
                size={card.size}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section;
