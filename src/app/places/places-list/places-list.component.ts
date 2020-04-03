import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
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

  readonly columns: string[] = ['status-color', 'company', 'address', 'id', 'status'];

  data$: Observable<Place[]>;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.data$ = this.placeService.getAll();
  }

  changeStatus(event: MatSelectChange, place: Place) {
    const newStatus = event.value;
    if (this.isApprove(newStatus)) {
      this.placeService.approve(place).subscribe(approvedPlace => {
        place = approvedPlace;
      });
    } else if (this.isBlocked(newStatus)) {
      this.placeService.block(place).subscribe(blockedPlace => {
        place = blockedPlace;
      });
    }
  }

  private isApprove(status: string): boolean {
    return status === 'CONTACTED';
  }

  private isBlocked(status: string): boolean {
    return status === 'BLOCKED';
  }
}
