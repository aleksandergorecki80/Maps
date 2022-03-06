import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `<p>Company name: ${this.companyName}.</p>
            Catch phrase: <i>${this.catchPhrase}.</i>
            Location: ${this.location.lat} - ${this.location.lng}`
  }

}
