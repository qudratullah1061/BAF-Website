import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginFormService {



  loginFormApi = "https://baf-website4-test.itcomrade.us/userlogin"


  constructor(private http: HttpClient) { }


  getLoginFormApiData():Observable<IAPIBase> {


    var formData: any = new FormData();
    formData.append("username", "qudrat.ullah@itcomrade.net");
    formData.append("password", "Test@123");

    return this.http.post<IAPIBase>(this.loginFormApi, formData);
  }


}







