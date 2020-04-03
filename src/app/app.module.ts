import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TransactionModule } from './transaction/transaction.module';
import { PlacesModule } from './places/places.module';
import { AuthModule } from './auth/auth.module';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule,
    TransactionModule,
    PlacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
