const SectionClass = class Section {
  constructor(header, headingLevel, body, theme, cards) {
    this.header = header;
    this.headingLevel = headingLevel;
    this.body = body;
    this.theme = theme;
    this.cards = cards;
  }
};

export default SectionClass;
