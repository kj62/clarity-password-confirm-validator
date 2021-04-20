import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn } from '@angular/forms';

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: FormControl) => {
    console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password).value === control.value ? null : { mismatch: true };
  };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12), 
        passwordMatchValidator('password')
      ]]
    });
   }
}
