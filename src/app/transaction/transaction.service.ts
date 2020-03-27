import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Transaction} from './transaction';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Transaction[]>('/api/admin/transactions');
    // const array = [];
    // for (let i; i < 100; i++) {
    //   array.push({
    //     name: 'transaction ' + i,
    //     amount: i
    //   })
    // }
    // return of(array);
  }
}
