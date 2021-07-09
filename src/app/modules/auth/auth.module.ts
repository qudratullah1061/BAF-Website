import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '@auth/components/register/register.component';
import { AuthService } from '@auth/services/auth.service';
import { UserLoginComponent } from '@auth/components/user-login/user-login.component';
import { authRoutes } from './auth-routes';
import { LoginFormComponent } from './components/login/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRouteActivatorService } from './guards/profile-route-activator.service';


@NgModule({
  declarations: [
    RegisterComponent,
    UserLoginComponent,
    LoginFormComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [AuthService,ProfileRouteActivatorService]
})
export class AuthModule { }
