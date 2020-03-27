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

  readonly columns: string[] = ['company'];

  data$: Observable<Place[]>;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.data$ = this.placeService.getAll();
  }
}
