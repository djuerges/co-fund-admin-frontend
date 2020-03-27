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
    return of([{
      id: '5e7de0265d692814d5d18947',
      placeId: 'ChIJ82Bjx--GsUcRKwu44T33nT0',
      company: 'ALDI Hamburg-Eidelstedt',
      address: 'Pinneberger Chaussee 130-132',
      zip: '22523',
      city: 'Hamburg',
      country: 'Germany',
      created: null,
      status: 'NEW'
    }]);
    //return this.http.get<Place[]>('/api/admin/places');
  }
}
