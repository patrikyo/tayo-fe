const SectionClass = class Section {
  constructor(header, headingLevel, body, theme, cards, sectionId) {
    this.header = header;
    this.headingLevel = headingLevel;
    this.body = body;
    this.theme = theme;
    this.cards = cards;
    this.sectionId = sectionId;
  }
};

export default SectionClass;
