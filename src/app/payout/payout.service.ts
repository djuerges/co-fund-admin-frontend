import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Payout} from './payout';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayoutService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Payout[]> {
    return of([{
      id: 'some-payment-id',
      amount: 10,
      place: {
        id: '5e7de0265d692814d5d18947',
        placeId: 'ChIJ82Bjx--GsUcRKwu44T33nT0',
        company: 'ALDI Hamburg-Eidelstedt',
        address: 'Pinneberger Chaussee 130-132',
        zip: '22523',
        city: 'Hamburg',
        country: 'Germany',
        created: null,
        status: 'ACTIVE'
      },
      status: 'PENDING'
    },
    {
      id: 'some-payment-id',
      amount: 10,
      place: {
        id: '5e7de0265d692814d5d18947',
        placeId: 'ChIJ82Bjx--GsUcRKwu44T33nT0',
        company: 'ALDI Hamburg-Eidelstedt',
        address: 'Pinneberger Chaussee 130-132',
        zip: '22523',
        city: 'Hamburg',
        country: 'Germany',
        created: null,
        status: 'ACTIVE'
      },
      status: 'ACCEPTED'
    },
    {
      id: 'some-payment-id',
      amount: 10,
      place: {
        id: '5e7de0265d692814d5d18947',
        placeId: 'ChIJ82Bjx--GsUcRKwu44T33nT0',
        company: 'ALDI Hamburg-Eidelstedt',
        address: 'Pinneberger Chaussee 130-132',
        zip: '22523',
        city: 'Hamburg',
        country: 'Germany',
        created: null,
        status: 'ACTIVE'
      },
      status: 'PAID'
    },
    {
      id: 'some-payment-id',
      amount: 10,
      place: {
        id: '5e7de0265d692814d5d18947',
        placeId: 'ChIJ82Bjx--GsUcRKwu44T33nT0',
        company: 'ALDI Hamburg-Eidelstedt',
        address: 'Pinneberger Chaussee 130-132',
        zip: '22523',
        city: 'Hamburg',
        country: 'Germany',
        created: null,
        status: 'ACTIVE'
      },
      status: 'DECLINED'
    }]);
    //return this.http.get<Payout[]>('/api/admin/payouts');
  }

  accept(payout: Payout): Observable<Payout> {
    return this.http.put<Payout>(`/api/admin/payouts/${payout.id}/accept`, payout);
  }

  decline(payout: Payout): Observable<Payout> {
    return this.http.put<Payout>(`/api/admin/payouts/${payout.id}/decline`, payout);
  }
}
