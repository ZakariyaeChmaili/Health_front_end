import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  hide = true;
  loadingFlag = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginFormGroup = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  login() {
    this.loadingFlag = !this.loadingFlag;
    this.snackBar.open('login in progress...', 'close');
    console.log(this.loginFormGroup.value);
    this.authService
      .login(
        this.loginFormGroup.value.username,
        this.loginFormGroup.value.password
      )
      .subscribe({
        next: (data) => {
          this.snackBar.dismiss();
          this.loadingFlag = !this.loadingFlag;
          if (data) {
            this.route.navigate(['/home']);
          }
        },
        error: (err) => {
          console.log(err);
          this.loadingFlag = !this.loadingFlag;
          this.snackBar.open('login failed', 'close',{
            
          });
        },
      });
  }
}
