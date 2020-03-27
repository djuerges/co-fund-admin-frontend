import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {SharedModule} from '../shared/shared.module';
import {TransactionListComponent} from './transaction-list/transaction-list.component';

@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    SharedModule
  ]
})
export class TransactionModule {
}
