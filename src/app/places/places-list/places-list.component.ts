import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cofund-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacesListComponent implements OnInit {

  columns: string[] = ['company'];
  data$: Observable<Place[]>;

  dataSource: Place[] = [
    {company: 'sdfdsf'} as unknown as Place
  ];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.data$ = this.placeService.getAll();
  }
}
