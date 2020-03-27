import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './places-list/places-list.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PlacesListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class PlacesModule { }
