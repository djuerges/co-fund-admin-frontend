import {Place} from '../places/place';

export interface Payout {
  id: string;
  amount: number;
  place: Place;
  status: 'PENDING' | 'ACCEPTED' | 'PAID' | 'DECLINED';
}
