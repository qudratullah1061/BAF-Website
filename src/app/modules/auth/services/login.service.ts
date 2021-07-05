import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class LoginService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getLoginFormGroup(): FormGroup {
    return this.fb.group({
      email: [[''], [Validators.required, Validators.maxLength(100)]],
      password: [[''], [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      isRemember: [false]
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

}







