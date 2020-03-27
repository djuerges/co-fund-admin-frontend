import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceAddressComponent } from './place-address/place-address.component';



@NgModule({
  declarations: [PlaceAddressComponent],
  exports: [
    PlaceAddressComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
