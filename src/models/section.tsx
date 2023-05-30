import Card from './card';
class Section {
  constructor(public readonly header: string, public readonly headingLevel: number, public readonly body: string, public readonly theme: string, public readonly cards: Card[], public readonly sectionId: string){
  }
}

export default Section;
