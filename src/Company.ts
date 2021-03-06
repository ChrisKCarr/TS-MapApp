import faker from 'faker';

export class Company {
  companyName: string;
  companyPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h3>Company Name: ${this.companyName}</h3>
    <h5>Company Motto: ${this.companyPhrase}</h5>
    </div>
    `;
  }
}
