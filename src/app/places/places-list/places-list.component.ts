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

  readonly columns: string[] = ['status-color', 'company', 'address', 'id', 'status', 'pdf'];

  data$: Observable<Place[]>;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.data$ = this.placeService.getAll();
  }

  changeStatus(event: MatSelectChange, place: Place) {
    const newStatus = event.value;
    if (this.isContacted(newStatus)) {
      this.placeService.approve(place).subscribe(approvedPlace => {
        place = approvedPlace;
      });
    } else if (this.isBlocked(newStatus)) {
      this.placeService.block(place).subscribe(blockedPlace => {
        place = blockedPlace;
      });
    }
  }

  downloadPdf(place: Place) {
    this.placeService.getInvitationLink(place).subscribe(invitationLink => {
      const url = invitationLink.link;
      window.open(url.startsWith('http') ? url : 'http://localhost:4572/cofund/' + url);
    });
  }

  hasPdf(status: string): boolean {
    return this.isActive(status) || this.isContacted(status);
  }

  private isContacted(status: string): boolean {
    return status === 'CONTACTED';
  }

  private isActive(status: string): boolean {
    return status === 'ACTIVE';
  }

  private isBlocked(status: string): boolean {
    return status === 'BLOCKED';
  }
}
