import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILoggedInUserInfo } from "@auth/models/ILogged-in-user-info";
import { IAPIBase } from "@shared/models/IApi-base";
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class LoginStateService {

  loggedInUserInfo: ILoggedInUserInfo;

  constructor(private http: HttpClient) { }

  checkUserLoggedIn(): void {
    var loginFormApi = "/api/isUserLoggedIn"
    this.http.get<IAPIBase>(loginFormApi).pipe(
      tap(data => {
        if (data.description instanceof Object) {
          this.loggedInUserInfo = <ILoggedInUserInfo>data.description;
        }
      })
    ).subscribe();
  }

  isUserAuthenticated(): boolean {
    return !!this.loggedInUserInfo;
  }


}

