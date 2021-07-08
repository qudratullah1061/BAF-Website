import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';


@Component({
  selector: 'baf-register',
  template: 'hellow',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  isRegister: boolean = false;
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.registrationForm = this.authService.getRegisterFormGroup();
  }

  registration() {
    console.log(this.registrationForm.value)
  }
}





