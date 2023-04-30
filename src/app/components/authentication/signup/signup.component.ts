import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/components/authentication/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  personneForm: FormGroup;
  loadingFlag = true;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private route : Router
  ) {
    this.personneForm = this.fb.group({
      cni: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      datenaiss: ['', Validators.required],
      ville: ['', Validators.required],
      nationality: ['', Validators.required],
      sexe: ['', Validators.required],
      sutuaFamil: ['', Validators.required],
      tel: ['', Validators.required],
      addresse: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      nommere: [''],
      nompere: [''],
      poids: [''],
      role: ['patient'],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const personne: any = this.personneForm.value;
    console.log(personne);
    console.log(this.personneForm);
    if (this.personneForm.valid) {
      this.loadingFlag = !this.loadingFlag;
      this.snackBar.open('signup in progress...', 'close');
      this.authenticationService.signup(this.personneForm.value).subscribe({
        next: (data) => {
          this.snackBar.dismiss();
          this.loadingFlag = !this.loadingFlag;
          console.log(data);
          this.route.navigate(["authentication/login"])
        },
        error: (err) => {
          this.loadingFlag = !this.loadingFlag;
          this.snackBar.open('signup failed', 'close');
          console.log(err);
        },
      });
    }
  }
}
