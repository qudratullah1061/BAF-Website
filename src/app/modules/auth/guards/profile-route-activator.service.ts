import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate, Router } from "@angular/router";
import { LoginStateService } from "@auth/services/login-state.service";


@Injectable()

export class ProfileRouteActivatorService implements CanActivate {

  constructor(private loginStateService: LoginStateService, private router: Router) {

  }

  canActivate(): boolean {

    if (!this.loginStateService.isUserAuthenticated()) {
      this.router.navigate(['/']);
    }

    return !!this.loginStateService.isUserAuthenticated();
  }

}
