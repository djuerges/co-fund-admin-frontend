export interface Transaction {
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
    status?: 'NEW' | 'CONTACTED' | 'ACTIVE' | 'DELETED'
  };
  status: 'PENDING' | 'ACCEPTED' | 'PAID' | 'DECLINED';
}
