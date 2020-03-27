import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './places-list/places-list.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [PlacesListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PlacesModule { }
