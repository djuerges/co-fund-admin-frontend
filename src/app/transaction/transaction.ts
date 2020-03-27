export class Transaction {
  id: string;
  amount: number;
  place: {
    id: string;
    placeId: string;
    company: string;
    address: string;
    zip: string;
    city: string;
    country: string
    status: 'NEW' | 'CONTACTED' | 'ACTIVE' | 'DELETED'
  }

  getAddress(): string {
    return`${this.place.id}
    ${this.place.placeId}
    ${this.place.company}
    ${this.place.address}
    ${this.place.zip}
    ${this.place.city}
    `
  }
}
