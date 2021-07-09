import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { LoginStateService } from '@auth/services/login-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'baf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLangBtn = environment.show_lang_btn;

  constructor(public loginStateService:LoginStateService) {}

  ngOnInit(): void {
    this.loginStateService.checkUserLoggedIn();
  }

  logout():void{
    localStorage.removeItem('loggedInUserInfo');
    window.location.reload();
  }

}
