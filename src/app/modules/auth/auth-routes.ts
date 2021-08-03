
import { Routes } from '@angular/router';
import { ProfileComponent } from '@auth/components/profile/profile.component';
import { RegisterComponent } from '@auth/components/register/register.component';
import { UserLoginComponent } from '@auth/components/user-login/user-login.component';
import { ProfileRouteActivatorService } from '@auth/guards/profile-route-activator.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyAccountComponent } from './components/register/verify-account.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthResolver } from './services/auth.resolver';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verify/:token/:email',
    component: VerifyAccountComponent,
    resolve: {
      verificationStatus: AuthResolver
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[ProfileRouteActivatorService]
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
  },
  // intgration remaining
  {
    path: 'resetPassword/:token/:email',
    component: ResetPasswordComponent,
  },
];
