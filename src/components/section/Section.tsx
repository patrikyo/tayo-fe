import Card from "../card/Card";
import SectionClass from "../../models/section"
import CardClass from "../../models/card"

import "./Section.scss";
const Section = ({section}: {section: SectionClass}): JSX.Element => {

  return (
    <div className={`section section--${section.theme}`}>
      <div className="container">
        <div
          className={`section__header ${
            section.theme === "light"
              ? "section__header--light"
              : "section__header--dark"
          }`}
        >
          {section.headingLevel === 2 ? (
            <h2 id={section.sectionId}>{section.header}</h2>
          ) : (
            <h3>{section.header}</h3>
          )}
        </div>
        {section.body.length > 0 && (
          <div className="section__body">
            <p>{section.body} </p>
          </div>
        )}
        <ul className="section__list">
          {section.cards?.map((card: CardClass, index: number) => (
            <li key={index}>
              <Card
                imgUrl={card.img}
                title={card.title}
                description={card.body}
                theme={section.theme}
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
