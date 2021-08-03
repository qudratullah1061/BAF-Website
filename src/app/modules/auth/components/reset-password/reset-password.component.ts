import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'baf-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  showResetForm: boolean = true;
  authError: string = "";
  authSuccess: string = "";
  resetPasswordForm: FormGroup;
  email: string = "";
  token: string = "";
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    this.email = this.route.snapshot.paramMap.get('email');
    this.resetPasswordForm = this.authService.getResetPasswordFormGroup(this.token, this.email);
  }

  updatePassword() {
    this.authService.resetPassword(this.resetPasswordForm).subscribe({
      next: data => {
        if (!data.error) {
          this.authSuccess = data.description;
          this.showResetForm = false;
        } else {
          this.authError = data.description;
        }
      }
    });
  }

}
