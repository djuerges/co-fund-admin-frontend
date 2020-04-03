import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) { }

  getSum(): Observable<number> {
    return of(10786);
    // return this.http.get<number>('/api/admin/transactions/sum');
  }

  getDonorCount(): Observable<number> {
    return of(231);
    // return this.http.get<number>('/api/admin/transactions/donorcount');
  }

  getPlaceCount(): Observable<number> {
    return of(89);
    // return this.http.get<number>('/api/admin/transactions/placecount');
  }
}
