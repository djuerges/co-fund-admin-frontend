import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {StatisticService} from './statistic.service';

@Component({
  selector: 'cofund-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticComponent implements OnInit {

  sum$: Observable<number>;
  donorCount$: Observable<number>;
  placeCount$: Observable<number>;

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.sum$ = this.statisticService.getSum();
    this.donorCount$ = this.statisticService.getDonorCount();
    this.placeCount$ = this.statisticService.getPlaceCount();
  }
}
