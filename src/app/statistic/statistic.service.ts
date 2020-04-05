import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) { }

  getPlacesCount(): Observable<number> {
    return this.http.get<number>('/api/admin/statistics/places/count');
  }

  getTransactionsCount(): Observable<number> {
    return this.http.get<number>('/api/admin/statistics/transactions/count');
  }

  getTransactionsSum(): Observable<number> {
    return this.http.get<number>('/api/admin/statistics/transactions/sum');
  }
}
