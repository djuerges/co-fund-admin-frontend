import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Place[]> {
    return this.http.get<Place[]>('/api/admin/places');
  }

  approve(place: Place): Observable<Place> {
    return this.http.put<Place>(`/api/admin/places/${place.id}/approve`, place);
  }

  block(place: Place): Observable<Place> {
    return this.http.put<Place>(`/api/admin/places/${place.id}/block`, place);
  }
}
