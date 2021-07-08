import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { ILoggedInUserInfo } from '@auth/models/ILogged-in-user-info';


@Component({
  selector: 'baf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  userInfo: ILoggedInUserInfo;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {


    this.userInfo = JSON.parse(localStorage.getItem('loggedInUserInfo'));

    this.profileForm = this.authService.getProfileFormGroup(this.userInfo);
  }
  updateProfile(){}
}
