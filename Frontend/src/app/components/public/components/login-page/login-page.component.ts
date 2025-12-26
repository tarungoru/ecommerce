import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  registerMode: boolean = false;
  registerForm:FormGroup;
  loginForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.registerForm = this.fb.group({
      name:[''],
      email:[''],
      password:['']
    });

    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    });
  }

  
}
