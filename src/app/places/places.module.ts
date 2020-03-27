import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {PlacesListComponent} from './places-list/places-list.component';

@NgModule({
  declarations: [PlacesListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class PlacesModule {
}
