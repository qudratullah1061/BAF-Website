import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { LoginStateService } from '@auth/services/login-state.service';
import Swal from 'sweetalert2';



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

  deleteAccount() {

    Swal.fire({
      title: 'Are you sure?',
      text: "Warning! Your account and saved data will be permanently deleted. Do you really want to delete your account and saved data?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete my account'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your account has been deleted.',
          'success'
        )
      }
    })
  }

}
