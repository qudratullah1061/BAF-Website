import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@auth/services/auth.service";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: "baf-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})

export class ForgotPasswordComponent implements OnInit {
  passwordResetForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {


    this.passwordResetForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
    })

  }

  passwordReset() {
    console.log(this.passwordResetForm.value);
  }



}
