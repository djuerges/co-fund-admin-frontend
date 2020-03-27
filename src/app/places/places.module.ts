import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './places-list/places-list.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PlaceLinkPipe } from './place-link.pipe';

@NgModule({
  declarations: [PlacesListComponent, PlaceLinkPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class PlacesModule { }
