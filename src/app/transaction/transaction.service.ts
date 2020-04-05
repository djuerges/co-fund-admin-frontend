import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Place} from '../places/place';
import {Transaction} from './transaction';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('/api/admin/transactions');
  }

  getAllByPlace(place: Place): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`/api/admin/transactions/place/${place.id}`);
  }

  getSummaryByPlace(place: Place): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`/api/admin/transactions/place/${place.id}/sum`);
  }

  accept(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`/api/admin/transactions/${transaction.id}/accept`, transaction);
  }

  decline(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`/api/admin/transactions/${transaction.id}/decline`, transaction);
  }
}
