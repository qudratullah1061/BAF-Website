import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { AuthService } from '@auth/services/auth.service';
import { LoginStateService } from '@auth/services/login-state.service';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'baf-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  // Login form variables
  loginForm: FormGroup;
  showLoading: boolean = false;
  authError: string = "";
  authSuccess: string = "";

  // Popup variables
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(private authService: AuthService, private loginStateService: LoginStateService, private router: Router, public bsModalRef: BsModalRef) { }

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
            this.bsModalRef.hide();
            this.loginStateService.loggedInUserInfo = <ILoggedInUserInfo>data.loggedInUser;
          }, 1000);
        } else {
          this.authError = data.description;
        }
        this.showLoading = false;
      }
    });
  }

}
