import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { LoginStateService } from '@auth/services/login-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'baf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLangBtn = environment.show_lang_btn;

  constructor(private router:Router, public loginStateService: LoginStateService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginStateService.checkUserLoggedIn();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: data => {
        if (!data.error) {
          this.loginStateService.loggedInUserInfo = null;
          this.router.navigate(['/']);
        }
      }
    });;
  }

}
