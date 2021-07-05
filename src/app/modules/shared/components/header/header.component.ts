import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'baf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLangBtn = environment.show_lang_btn;
  loggedInUserInfo : ILoggedInUserInfo;

  @Output() loggedInUserInfoEmitter: EventEmitter<ILoggedInUserInfo> = new EventEmitter<ILoggedInUserInfo>();

  constructor() { }

  ngOnInit(): void {
    this.loggedInUserInfo = JSON.parse(localStorage.getItem('loggedInUserInfo')) as ILoggedInUserInfo;
    // console.log(this.loggedInUserInfo);
    this.loggedInUserInfoEmitter.emit(this.loggedInUserInfo);
  }

  logout():void{
    localStorage.removeItem('loggedInUserInfo');
    window.location.reload();
  }

}
