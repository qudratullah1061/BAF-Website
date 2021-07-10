import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';


@Component({
  selector: 'baf-register',
  template: 'hellow',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  authError: string = "";
  authSuccess: string = "";
  showLoading: boolean = false;
  isRegistrationComplete: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.registrationForm = this.authService.getRegisterFormGroup();
  }

  registerUser(): void {
    if (this.registrationForm.valid) {
      this.showLoading = true;
      this.authService.registerUser(this.registrationForm).subscribe({
        next: data => {
          this.authError = "";
          this.authSuccess = "";
          if (!data.error) {
            this.authSuccess = data.description;
            this.isRegistrationComplete = true;
          } else {
            this.authError = data.description;
          }
          this.showLoading = false;
        }
      });
    }
  }
}





