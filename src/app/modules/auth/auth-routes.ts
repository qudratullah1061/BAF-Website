
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
