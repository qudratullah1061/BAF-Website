import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';

function passwordMatch(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return (password === confirmPassword) ? null : { 'notMatched': true };
  }
}

@Injectable()

export class AuthService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getRegisterFormGroup(): FormGroup {
    return this.fb.group({
      firstName: [[], [Validators.required, Validators.maxLength(50)]],
      lastName: [[], [Validators.required]],
      email: [[], [Validators.required, Validators.email]],
      affiliation: [[], []],
      location: [[], []],
      phoneNumber: [[], []],

      matchPassword: this.fb.group({
        password: [[], [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.pattern(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)]],
        confirmPassword: [[], [Validators.required]]
      }, { validators: passwordMatch() })

    });
  }



  getProfileFormGroup(userInfo: ILoggedInUserInfo): FormGroup {
    return this.fb.group({
      firstName: [userInfo.firstName, [Validators.required]],
      lastName: [userInfo.lastName, [Validators.required, Validators.maxLength(50)]],
      email: [userInfo.email, [Validators.required, Validators.email, Validators.minLength(10)]],
      affiliation: [userInfo.affiliation, [Validators.maxLength(100)]],
      location: [userInfo.location, [Validators.maxLength(100)]],
      phoneNumber: [userInfo.phoneNumber, [Validators.maxLength(100)]],
      userName: [userInfo.userName, [Validators.required, Validators.maxLength(30)]]
    });
  }

  getLoginFormGroup(): FormGroup {
    return this.fb.group({
      email: [[], [Validators.required]],
      password: [[], [Validators.required]],
      isRemember: [false]
    });
  }


  getForgetPasswordFormGroup(): FormGroup {
    return this.fb.group({
      oldPassword: [[], [Validators.required, Validators.maxLength(128), Validators.minLength(6), Validators.pattern(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)]],
      matchPassword: this.fb.group({
        password: [[], [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)]],
        confirmPassword: [[], [Validators.required]],
      }, { validator: passwordMatch()})
    });
  }



  authUser(loginForm: FormGroup): Observable<IAPIBase> {
    // var loginFormApi = environment.apiUrl + "/userlogin"
    var loginFormApi = "/api/userlogin"
    var username = loginForm.get('email').value;
    var password = loginForm.get('password').value;
    var formData: any = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    return this.http.post<IAPIBase>(loginFormApi, formData);
  }

  registerUser(registerForm: FormGroup): Observable<IAPIBase> {

    var registerFormApi = "/api/userregister";
    var formData: any = new FormData();
    formData.append("firstname", registerForm.get('firstName').value);
    formData.append("lastname", registerForm.get('lastName').value);
    formData.append("email", registerForm.get('email').value);
    formData.append("affiliation", registerForm.get('affiliation').value);
    formData.append("location", registerForm.get('location').value);
    formData.append("phonenumber", registerForm.get('phoneNumber').value);
    formData.append("password", registerForm.get('matchPassword').get('password').value);
    formData.append("confirmpassword", registerForm.get('matchPassword').get('confirmPassword').value);
    return this.http.post<IAPIBase>(registerFormApi, formData);
  }

  updateUserProfile(profileForm: FormGroup): Observable<IAPIBase> {
    var profileFormApi = "/api/update-profile-api";
    var formData: any = new FormData();
    formData.append("firstname", profileForm.get('firstName').value);
    formData.append("lastname", profileForm.get('lastName').value);
    formData.append("email", profileForm.get('email').value);
    formData.append("affiliation", profileForm.get('affiliation').value);
    formData.append("location", profileForm.get('location').value);
    formData.append("phonenumber", profileForm.get('phoneNumber').value);
    formData.append("username", profileForm.get('userName').value);
    return this.http.post<IAPIBase>(profileFormApi, formData);
  }

}







