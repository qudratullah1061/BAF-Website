import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '@auth/components/register/register.component';
import { LoginService } from '@auth/services/login.service';
import { RegisterService } from '@auth/services/register.service';
import { UserLoginComponent } from '@auth/components/user-login/user-login.component';
import { authRoutes } from './auth-routes';
import { LoginFormComponent } from './components/login/login-form.component';


@NgModule({
  declarations: [
    RegisterComponent,
    UserLoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [LoginService, RegisterService]
})
export class AuthModule { }
