import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Transaction} from '../transaction';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnInit {

  list$: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
   this.list$ = this.transactionService.getAll();
  }

}
