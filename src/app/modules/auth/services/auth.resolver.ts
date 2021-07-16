import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { IAPIBase } from "@shared/models/IApi-base";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()

export class AuthResolver implements Resolve<IAPIBase> {

  constructor(private authService: AuthService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAPIBase> {
    var token: string = route.paramMap.get('token');
    var email: string = route.paramMap.get('email');
    return this.authService.verifyAccountEmail(token, email);
  }
}
