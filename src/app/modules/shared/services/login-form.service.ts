import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class LoginFormService {

  loginFormApi = environment.apiUrl + "userlogin"

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getLoginFormGroup(): FormGroup {
    return this.fb.group({
      email: [[''], [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      isRemember: [false]
    });
  }

  authUser(): Observable<IAPIBase> {
    var formData: any = new FormData();
    formData.append("username", "qudrat.ullah@itcomrade.net");
    formData.append("password", "Test@123");
    return this.http.post<IAPIBase>(this.loginFormApi, formData);
  }

}







