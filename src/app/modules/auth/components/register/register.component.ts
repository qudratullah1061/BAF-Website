import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, Validator, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'baf-register',
  template: 'hellow',
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
      matchPassword: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/)]],
        confirmPassword: ['', [Validators.required]]
      }, { validator: passwordMatch })

    });
  }

  registration() {
    console.log(this.registrationForm.value)
  }

  // passwordStrength(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {

  //     const value = control.value;

  //     if (!value) {
  //       return null;
  //     }

  //     const hasUpperCase = /[A-Z]+/.test(value);

  //     const hasLowerCase = /[a-z]+/.test(value);

  //     const hasNumeric = /[0-9]+/.test(value);

  //     const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

  //     return !passwordValid ? { passwordStrength: true } : null;
  //   }

}

// passwordMatch(): ValidatorFn {
function passwordMatch(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;

  // console.log(password + "::");
  // console.log(confirmPassword);
  // console.log(password === confirmPassword);
  return (password === confirmPassword) ? null : { 'pMatch': true };
  // }


}




