import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesListComponent } from './places/places-list/places-list.component';


const routes: Routes = [
  { path: 'places', component: PlacesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
