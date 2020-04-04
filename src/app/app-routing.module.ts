import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatisticComponent} from './statistic/statistic.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}, 
{
  path: 'register',
  component: RegisterComponent,
},
{
  path: 'register-success',
  component: RegisterSuccessComponent,
},
{
  path: '',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'transactions', component: TransactionListComponent },
      { path: 'places', component: PlacesListComponent },
      { path: 'statistics', component: StatisticComponent }
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
