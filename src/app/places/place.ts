export interface Place {
  id: string;
  placeId: string;
  company: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  created: Date;
  status: 'NEW' | 'CONTACTED' | 'ACTIVE' | 'BLOCKED';
}
