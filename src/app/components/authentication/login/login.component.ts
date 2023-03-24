import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.loginFormGroup = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  login() {
    console.log(this.loginFormGroup.value);
    this.authService
      .login(
        this.loginFormGroup.value.username,
        this.loginFormGroup.value.password
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        }
      });
  }
}