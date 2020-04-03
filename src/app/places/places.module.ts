import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { PlacesListComponent } from './places-list/places-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceLinkPipe } from './place-link.pipe';

@NgModule({
  declarations: [PlacesListComponent, PlaceLinkPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    SharedModule
  ]
})
export class PlacesModule { }
