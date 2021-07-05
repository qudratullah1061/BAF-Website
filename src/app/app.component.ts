import { Component, OnInit } from '@angular/core';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';

@Component({
  selector: 'baf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BAF-Website';
  loggedInUserInfo:ILoggedInUserInfo;
  ngOnInit(): void {
  }

  getLoggedInUserInfo(loggedInUserInfo: ILoggedInUserInfo): void {
    this.loggedInUserInfo = loggedInUserInfo;
  }
}
