import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Transaction} from './transaction';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Transaction[]> {
    // return this.http.get<Transaction[]>('/api/admin/transactions');
    // const array = [];
    // for (let i; i < 100; i++) {
    //   array.push({
    //     name: 'transaction ' + i,
    //     amount: i
    //   })
    // }
    // return of(array);
    return of([
      {
        id:'5e7de0255d692814d5d18946',
        amount: 10,
        place:  {
          id: '5e7de0265d692814d5d18947',
          placeId: 'ChIJ82Bjx--GsUcRKwu44T33nT0',
          company: 'ALDI Hamburg-Eidelstedt',
          address: 'Pinneberger Chaussee 130-132',
          zip: '22523',
          city: 'Hamburg',
          country: 'Germany',
          created: null
        },
        status: 'PENDING'
      }]);
  }
}
