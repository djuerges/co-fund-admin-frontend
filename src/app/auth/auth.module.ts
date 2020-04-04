import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, RegisterSuccessComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
