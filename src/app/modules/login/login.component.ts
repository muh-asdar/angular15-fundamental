import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
  ){}

  hide = true;

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  getErrorMessageEmail() {
    return this.loginFormGroup.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if (this.loginFormGroup.controls.email.value == 'asdar@mail' && this.loginFormGroup.controls.password.value == '123') {
      sessionStorage.setItem('isLogin', 'true');
      sessionStorage.setItem('role', 'user');
      this.router.navigate(['/home']);
    } else if(this.loginFormGroup.controls.email.value == 'admin@mail' && this.loginFormGroup.controls.password.value == 'admin'){
      sessionStorage.setItem('isLogin', 'true');
      sessionStorage.setItem('role', 'admin');
      this.router.navigate(['/home']);
    } else {
      sessionStorage.clear();
      window.alert('Email dan Password Salah!');
    }
  }
}
