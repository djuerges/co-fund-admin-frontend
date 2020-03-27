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
    return this.http.get<Transaction[]>('/api/admin/transactions');
  }
}
