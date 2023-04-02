const cardClass = class Card {
  constructor(img, title, body, button, icon, sectionId, size) {
    this.img = img;
    this.title = title;
    this.body = body;
    this.button = button;
    this.icon = icon;
    this.sectionId = sectionId;
    this.size = size;
  }
};

export default cardClass;
