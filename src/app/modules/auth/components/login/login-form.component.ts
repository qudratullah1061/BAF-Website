import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { AuthService } from '@auth/services/auth.service';
import { LoginStateService } from '@auth/services/login-state.service';

@Component({
  selector: 'baf-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  showLoading: boolean = false;
  authError: string = "";
  authSuccess: string = "";
  @Input() dropdown: any;

  constructor(private authService: AuthService, private loginStateService: LoginStateService, private router: Router) {
  }

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
          this.authSuccess = data.description;
          setTimeout(() => {
            this.dropdown.hide();
            this.loginStateService.loggedInUserInfo = <ILoggedInUserInfo>data.loggedInUser;
            this.router.navigate(['/']);
          }, 1000);
        } else {
          this.authError = data.description;
        }
        this.showLoading = false;
      }
    });
  }
}
