import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'baf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  isRegister: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      affiliation: ['', [Validators.required]],
      location: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordStrength()]],
      confirmPassword: ['', [Validators.required]]

      // matchPassword: this.fb.group({
      //   password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      //   confirmPassword: ['', [Validators.required]]
      // }),


      // get validationControls() {
      //   return this.registrationForm.controls
      // }

    },{validator: this.passwordConfirming});




  }


  passwordConfirming(vc: AbstractControl): { invalid: boolean } {
    // console.log(c);
    if (vc.get('password').value !== vc.get('confirmPassword').value) {
      return { invalid: true };
    }
  }


  passwordStrength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? { passwordStrength: true } : null;
    }
  }

  passwordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const password = this.registrationForm.controls.password.value;
      const confirmPassword = this.registrationForm.controls.confirmPassword.value;

      if (!password) {
        return null;
      }

      // if (confirmPassword === password) {
      //   return null;
      // }



      return (password === confirmPassword) ? { pMatch: true } : null;
    }


  }


  registration() {
    console.log(this.registrationForm.value)
  }

}



