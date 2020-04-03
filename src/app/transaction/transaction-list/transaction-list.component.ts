import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
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

  readonly columns: string[] = ['status-color', 'id', 'place', 'amount', 'status'];

  data$: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
   this.data$ = this.transactionService.getAll();
  }

  changeStatus(event: MatSelectChange, transaction: Transaction) {
    const newStatus = event.value;
    if (this.isAccepted(newStatus)) {
      this.transactionService.accept(transaction).subscribe(acceptedTransaction => {
        transaction = acceptedTransaction;
      });
    } else if (this.isDeclined(newStatus)) {
      this.transactionService.decline(transaction).subscribe(declinedTransaction => {
        transaction = declinedTransaction;
      });
    }
  }

  private isAccepted(status: string): boolean {
    return status === 'ACCEPTED';
  }

  private isDeclined(status: string): boolean {
    return status === 'DECLINED';
  }
}
