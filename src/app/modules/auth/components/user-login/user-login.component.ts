import { Component, OnInit } from '@angular/core';
import { LoginService } from '@auth/services/login.service';

@Component({
  selector: 'baf-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {


  constructor(private userLogin: LoginService) { }

  ngOnInit(): void {
    this.userLogin.getLoginFormGroup();
  }

}
