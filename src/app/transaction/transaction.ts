import {Place} from '../places/place';

export interface Transaction {
  id: string;
  amount: number;
  place: Place;
  status: 'PENDING' | 'ACCEPTED' | 'PAID' | 'DECLINED';
}
