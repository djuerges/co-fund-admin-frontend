import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [{

  path: 'login',
  component: LoginComponent,
},{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    children: [
      { path: 'transactions', component: TransactionListComponent },
      { path: 'places', component: PlacesListComponent }
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
