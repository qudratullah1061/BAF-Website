
import { Routes } from '@angular/router';
import { ProfileComponent } from '@auth/components/profile/profile.component';
import { RegisterComponent } from '@auth/components/register/register.component';
import { UserLoginComponent } from '@auth/components/user-login/user-login.component';
import { ProfileRouteActivatorService } from '@auth/guards/profile-route-activator.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

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
    path:'forgotPassword',
    component: ForgotPasswordComponent,
    
  },

  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate:[ProfileRouteActivatorService]
  }


];
