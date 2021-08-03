import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@auth/services/auth.service";
import { FormBuilder } from '@angular/forms';
import { LoginStateService } from "@auth/services/login-state.service";
import { Router } from "@angular/router";


@Component({
  selector: "baf-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})

export class ForgotPasswordComponent implements OnInit {
  passwordResetForm: FormGroup;
  showLoading: boolean = false;
  authError: string = "";
  authSuccess: string = "";
  constructor(private authService: AuthService, private loginStateService: LoginStateService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.loginStateService.loggedInUserInfo != null) {
      this.router.navigate(['/']);
    }
    this.passwordResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })

  }

  passwordReset() {
    if (this.passwordResetForm.valid) {
      this.showLoading = true;
      this.authService.forgotPassword(this.passwordResetForm).subscribe({
        next: data => {
          this.authError = "";
          this.authSuccess = "";
          if (!data.error) {
            this.authSuccess = data.description;
          } else {
            this.authError = data.description;
          }
          this.showLoading = false;
        }
      });
    }
  }



}
