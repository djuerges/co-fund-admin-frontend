import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Place[]> {
    return this.http.get<Place[]>('/api/admin/places');
  }
}
