import faker from 'faker';

export class User {
  name: string;
  job: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.job = faker.name.jobTitle();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h3>User Name: ${this.name}</h3>
    <h3>Job Title: ${this.job}</h3>
    </div>
    `;
  }
}
