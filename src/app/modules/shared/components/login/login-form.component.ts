import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoggedInUserInfo } from '@shared/models/ilogged-in-user-info';
import { CommonService } from '@shared/services/common.service';
import { LoginFormService } from '@shared/services/login-form.service';

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

  constructor(private loginFormService: LoginFormService, private commonService:CommonService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormService.getLoginFormGroup();
  }

  authUserLogin() {
    this.showLoading = true;
    this.loginFormService.authUser(this.loginForm).subscribe({
      next: data => {
        this.authError = "";
        this.authSuccess = "";
        if (!data.error) {
          this.loggedInUserInfo = data.loggedInUser as ILoggedInUserInfo;
          this.authSuccess = data.description;
          this.commonService.reloadPage();
        } else {
          this.authError = data.description;
        }
        this.showLoading = false;
      }
    });
  }








}
