import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { LoginStateService } from '@auth/services/login-state.service';



@Component({
  selector: 'baf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  authError: string = "";
  authSuccess: string = "";
  showLoading: boolean = false;
  profileForm: FormGroup;
  passwordResetForm: FormGroup;

  userInfo: ILoggedInUserInfo;

  constructor(public loginStateService: LoginStateService, private authService: AuthService) { }

  ngOnInit(): void {


    this.userInfo = this.loginStateService.loggedInUserInfo;

    this.profileForm = this.authService.getProfileFormGroup(this.userInfo);

    this.passwordResetForm = this.authService.getForgetPasswordFormGroup();
  }
  updateUserProfile() {

    if (this.profileForm.valid) {
      this.showLoading = true;
      this.authService.updateUserProfile(this.profileForm).subscribe({
        next: data => {
          this.authError = "";
          this.authSuccess = "";
          if (!data.error) {
            this.authSuccess = data.description;
            this.loginStateService.checkUserLoggedIn();
          } else {
            this.authError = data.description;
          }
          this.showLoading = false;
        }
      });
    }
  }
  passwordReset() {
    console.log(this.passwordResetForm.value)
  }
}
