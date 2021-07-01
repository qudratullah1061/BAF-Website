import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ILoggedInUserInfo } from '@shared/models/ilogged-in-user-info';
import { LoginFormService } from '@shared/services/login-form.service';

@Component({
  selector: 'baf-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loggedInUserInfo: ILoggedInUserInfo;
  loginForm: FormGroup;
  showLoading:boolean = false;

  constructor(private loginFormService: LoginFormService) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormService.getLoginFormGroup();
  }

  authUserLogin() {

    // if (this.loginForm.controls.email.value === "" || this.loginForm.controls.pass.value == "") {
    //   alert('Pleasee fill all feilds')
    // }

    this.showLoading = true;
    this.loginFormService.authUser().subscribe({
      next: data => {
        if (!data.error) {
          this.loggedInUserInfo = data.loggedInUser as ILoggedInUserInfo
          console.log(this.loggedInUserInfo);
          this.showLoading = false;
        } else {
          alert(data.description);
        }
      }
    });

    console.log(this.loginForm.value);
    this.loginForm.reset()

  }








}
