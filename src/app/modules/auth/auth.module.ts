import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '@auth/components/login/login-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '@auth/components/register/register.component';
import { LoginService } from '@auth/services/login.service';
import { RegisterService } from './services/register.service';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginFormComponent,
  ],
  providers: [LoginService, RegisterService]
})
export class AuthModule { }
