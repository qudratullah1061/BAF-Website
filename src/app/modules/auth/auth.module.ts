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
import { ForgotPasswordComponent } from '@auth/components/forgot-password/forgot-password.component';
import { VerifyAccountComponent} from '@auth/components/register/verify-account.component';
import { AuthResolver } from '@auth/services/auth.resolver';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



@NgModule({
  declarations: [
    RegisterComponent,
    UserLoginComponent,
    LoginFormComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    VerifyAccountComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [AuthService,ProfileRouteActivatorService,AuthResolver]
})
export class AuthModule { }
