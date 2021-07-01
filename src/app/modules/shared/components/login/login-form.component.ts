import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginFormService } from '@shared/services/login-form.service';

@Component({
  selector: 'baf-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginFormData:any;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginFormService: LoginFormService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: [[''], [Validators.required, Validators.email]],
      pass: ['', [Validators.required,Validators.minLength(4)]],
      isRemember: [false]
    });


    this.loginFormService.getLoginFormApiData().subscribe({
      next: data => {
        this.loginFormData = data
        console.log(this.loginFormData)

        if (this.loginFormData.loggedInUser && this.loginFormData.loggedInUser.loginToken == "") {
          localStorage.setItem('token', this.loginFormData.loggedInUser['token']);
        }


      }
    })




  }

  getToken() {
    return localStorage.getItem('token');
  }





  onSubmit() {
    if (this.loginForm.controls.email.value === "" || this.loginForm.controls.pass.value == "") {
      alert('Pleasee fill all feilds')
    }

    console.log(this.loginForm.value);
    this.loginForm.reset()

  }








}
