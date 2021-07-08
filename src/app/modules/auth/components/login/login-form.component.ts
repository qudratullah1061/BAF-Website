import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'baf-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loggedInUserInfo: ILoggedInUserInfo;
  loginForm: FormGroup;
  showLoading: boolean = false;
  authError: string = "";
  authSuccess: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.authService.getLoginFormGroup();
  }

  authUserLogin() {
    this.showLoading = true;
    this.authService.authUser(this.loginForm).subscribe({
      next: data => {
        this.authError = "";
        this.authSuccess = "";
        if (!data.error) {
          this.loggedInUserInfo = data.loggedInUser as ILoggedInUserInfo;
          this.authSuccess = data.description;
          localStorage.setItem('loggedInUserInfo', JSON.stringify(this.loggedInUserInfo));
          window.location.reload();
        } else {
          this.authError = data.description;
        }
        this.showLoading = false;
      }
    });
  }
}
