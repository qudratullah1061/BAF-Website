import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { LoginStateService } from '@auth/services/login-state.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'baf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  authError: string = "";
  authSuccess: string = "";
  changePasswordSuccess: string = "";
  changePasswordError: string = "";
  showLoading: boolean = false;
  profileForm: FormGroup;
  changePasswordForm: FormGroup;

  userInfo: ILoggedInUserInfo;

  constructor(public loginStateService: LoginStateService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {


    this.userInfo = this.loginStateService.loggedInUserInfo;

    this.profileForm = this.authService.getProfileFormGroup(this.userInfo);

    this.changePasswordForm = this.authService.getChangePasswordFormGroup();
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
  changePassword() {
    this.authService.changePassword(this.changePasswordForm).subscribe({
      next: data => {
        this.changePasswordError = "";
        this.changePasswordSuccess = "";
        if (!data.error) {
          this.changePasswordSuccess = data.description;
        } else {
          this.changePasswordError = data.description;
        }
      }
    });
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
        this.authService.deleteAccount().subscribe({
          next: data => {
            if (!data.error) {
              Swal.fire(
                'Deleted!',
                data.description,
                'success'
              );
              this.router.navigate(['/']);
            } else {
              Swal.fire(
                'Error!',
                data.description,
                'error'
              );
            }
          }
        });
      }
    })
  }
}
